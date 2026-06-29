import "dotenv/config";
import db from "./../db/db";
import { users, courses, topics, lessons, slides, disabilities, student_disabilities } from "./schema";
import { courseData } from "../types/courseData";
import { sql } from "drizzle-orm";

const appStage = process.env.APP_STAGE;

const seed = async () => {
  if (appStage === "production") {
    console.error("ERROR: Cannot run seed script in production environment!");
    console.error("Current APP_STAGE:", appStage);
    process.exit(1);
  }

  console.log(`Running seed in ${appStage} environment...`);
  console.log("Starting course seed...");

  try {
    console.log("Deleting existing data...");
    await db.execute(
      sql`TRUNCATE slides, lessons, topics, courses, users, posts, enrrollments, student_progress, disabilities, student_disabilities RESTART IDENTITY CASCADE`
    );

    console.log("Inserting seed data...");

    const { user, topics: topicData, ...course } = courseData;

    const [insertedUser] = await db
      .insert(users)
      .values({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        isActive: true,
        isVerified: true,
      })
      .returning();

    console.log(`Inserted user: ${insertedUser.email}`);

    const [insertedCourse] = await db
      .insert(courses)
      .values({
        creatorId: insertedUser.id,
        title: course.title,
        subtitle: course.subtitle,
        initialism: course.initialism,
        credits: course.credits,
        courseType: course.courseType,
        description: course.description,
      })
      .returning();

    console.log(`Inserted course: ${insertedCourse.title}`);

    for (const topic of topicData) {
      const [insertedTopic] = await db
        .insert(topics)
        .values({
          courseId: insertedCourse.id,
          topicName: topic.topicName,
        })
        .returning();

      console.log(`  Inserted topic: ${insertedTopic.topicName}`);

      for (const lesson of topic.lessons) {
        const [insertedLesson] = await db
          .insert(lessons)
          .values({
            topicId: insertedTopic.id,
            lessonName: lesson.lessonName,
            lessonType: lesson.lessonType,
          })
          .returning();

        console.log(`    Inserted lesson: ${insertedLesson.lessonName}`);

        if (lesson.slides.length > 0) {
          await db.insert(slides).values(
            lesson.slides.map((slide, index) => ({
              lessonId: insertedLesson.id,
              slideType: "text",
              order: index + 1,
              text: slide.text,
            }))
          );
        }

        console.log(`      Inserted ${lesson.slides.length} slides`);
      }
    }

    console.log(`\nCourse seeded successfully!`);
    console.log(`- 1 user (teacher)`);
    console.log(`- 1 course`);
    console.log(`- ${topicData.length} topics`);
    const totalLessons = topicData.reduce(
      (sum, t) => sum + t.lessons.length,
      0
    );
    console.log(`- ${totalLessons} lessons`);
    const totalSlides = topicData.reduce(
      (sum, t) => sum + t.lessons.reduce((s, l) => s + l.slides.length, 0),
      0
    );
    console.log(`- ${totalSlides} slides`);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seed script finished.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error running seed script:", error);
      process.exit(1);
    });
}

export default seed;
