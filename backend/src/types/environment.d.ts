export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}