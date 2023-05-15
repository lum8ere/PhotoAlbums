export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      ENV: 'test' | 'dev' | 'prod';
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_DIALECT: string;
      POOL_MAX: number;
      POOL_MIN: number;
      POOL_ACQUIRE: number;
      POOL_IDLE: number;
    }
  }
}