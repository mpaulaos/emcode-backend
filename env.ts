// @ts-ignore
import {env as loadEnv} from 'custom-env';
import { z } from 'zod';

process.env.APP_STAGE = process.env.APP_STAGE || 'dev';

const isProduction = process.env.APP_STAGE === 'production';
const isDevelopment = process.env.APP_STAGE === 'dev';
const isTesting = process.env.APP_STAGE === 'test';

if (isProduction) { 
    loadEnv('production');
} else if (isDevelopment) {
    loadEnv();
} else if (isTesting) {
    loadEnv('test');
}

const envSchema = z.object({
    NODE_ENV: z
        .enum(['production', 'dev', 'test'])
        .default('dev'),
    
    APP_STAGE: z
        .enum(['production', 'dev', 'test'])
        .default('dev'),
    
    PORT: z.coerce.number().positive().default(3000),

    DATABASE_URL: z.string().startsWith('postgresql://'),

    //JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters long'),
    JWT_EXPIRES_IN: z.string().default('1h'),

    BCRYPT_ROUNDS: z.coerce.number().positive().min(1).max(20).default(12),

    CORS_ORIGIN: z.string().url().default('http://localhost:5173'),
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

try{
    env = envSchema.parse(process.env);
}catch (error) {
    if (error instanceof z.ZodError) {
        console.error('Environment variable validation failed ' + JSON.stringify(z.treeifyError(error), null, 2));

        error.issues.forEach((err) => {
            const path = err.path.join('.');
            console.error(`- ${path}: ${err.message}`);
        });
        
        process.exit(1);
    }

    throw error;
}

export const isProd = ()=> env.APP_STAGE === 'production';
export const isDev = ()=> env.APP_STAGE === 'dev';
export const isTest = ()=> env.APP_STAGE === 'test';

export default env;