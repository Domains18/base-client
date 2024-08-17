declare namespace Nodejs {
    export interface ProcessEnv {
        DATABASE_URL: string;
        JWT_SECRET: string;
        PORT: string;
        JWT_REFRESH_SECRET: string;
    }
}