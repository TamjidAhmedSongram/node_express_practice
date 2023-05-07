// env.d.ts
declare namespace NodeJS {
    export interface ProcessEnv {
      JWT_SECRET_KEY: string;
      // add other variables here
    }
  }