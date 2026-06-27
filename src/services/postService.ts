import PostRepository from '../repositories/postRepository';
import type { PostWithUser } from '../repositories/postRepository';

type Author = {
    firstName: string | null;
    lastName: string | null;
    profilePicture: string | null;
};

export type PostTreeNode = {
    id: number;
    courseId: number;
    userId: number;
    parentPostId: number | null;
    content: string;
    isDeleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    author: Author;
    replies: PostTreeNode[];
    replyCount: number;
};

class PostService {
    private postRepository: PostRepository;

    constructor() {
        this.postRepository = new PostRepository();
    }

    async getByCourseId(courseId: number) {
        const allPosts = await this.postRepository.findAllByCourseId(courseId);
        const tree = this.buildTree(allPosts);
        return tree.map(root => this.maskDeleted(this.countReplies(root)));
    }

    async getById(id: number) {
        const post = await this.postRepository.findById(id);
        if (!post) return null;

        const allPosts = await this.postRepository.findAllByCourseId(post.courseId);
        const tree = this.buildTree(allPosts);

        const node = this.findInTree(tree, id);
        if (!node) return null;

        return this.maskDeleted(this.countReplies(node));
    }

    async create(courseId: number, userId: number, content: string) {
        const newPost = await this.postRepository.create({ courseId, userId, content, parentPostId: null });
        return this.postRepository.findById(newPost.id);
    }

    async reply(postId: number, userId: number, content: string) {
        const parent = await this.postRepository.findById(postId);
        if (!parent) {
            throw new Error('Post no encontrado');
        }
        const newPost = await this.postRepository.create({
            courseId: parent.courseId,
            userId,
            content,
            parentPostId: postId,
        });
        return this.postRepository.findById(newPost.id);
    }

    async update(postId: number, userId: number, content: string) {
        const postUserId = await this.postRepository.findUserIdByPostId(postId);
        if (postUserId === null) {
            throw new Error('Post no encontrado');
        }
        if (postUserId !== userId) {
            throw new Error('No tienes permiso para editar este post');
        }
        return this.postRepository.update(postId, { content });
    }

    async remove(postId: number, userId: number, role: string) {
        const postUserId = await this.postRepository.findUserIdByPostId(postId);
        if (postUserId === null) {
            throw new Error('Post no encontrado');
        }
        if (postUserId !== userId && role !== 'admin' && role !== 'teacher') {
            throw new Error('No tienes permiso para eliminar este post');
        }
        return this.postRepository.softDelete(postId);
    }

    private buildTree(posts: PostWithUser[]): PostTreeNode[] {
        const map = new Map<number, PostTreeNode>();
        const roots: PostTreeNode[] = [];

        for (const p of posts) {
            map.set(p.id, {
                id: p.id,
                courseId: p.courseId,
                userId: p.userId,
                parentPostId: p.parentPostId,
                content: p.content,
                isDeleted: p.isDeleted,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt,
                author: {
                    firstName: p.authorFirstName,
                    lastName: p.authorLastName,
                    profilePicture: p.authorProfilePicture,
                },
                replies: [],
                replyCount: 0,
            });
        }

        for (const node of map.values()) {
            if (node.parentPostId === null) {
                roots.push(node);
            } else {
                const parent = map.get(node.parentPostId);
                if (parent) {
                    parent.replies.push(node);
                } else {
                    roots.push(node);
                }
            }
        }

        return roots;
    }

    private countReplies(node: PostTreeNode): PostTreeNode {
        let count = 0;
        for (const reply of node.replies) {
            this.countReplies(reply);
            count += 1 + reply.replyCount;
        }
        node.replyCount = count;
        return node;
    }

    private maskDeleted(node: PostTreeNode): PostTreeNode {
        if (node.isDeleted) {
            node.content = '[Este mensaje ha sido eliminado]';
        }
        node.replies = node.replies.map(r => this.maskDeleted(r));
        return node;
    }

    private findInTree(nodes: PostTreeNode[], id: number): PostTreeNode | null {
        for (const node of nodes) {
            if (node.id === id) return node;
            const found = this.findInTree(node.replies, id);
            if (found) return found;
        }
        return null;
    }
}

export default PostService;
