namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production';
    DATABASE_URL: string;
  }
}
