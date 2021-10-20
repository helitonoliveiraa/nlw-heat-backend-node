declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NLWHEAT_GITHUB_CLIENT_SECRET: 'string';
    NLWHEAT_GITHUB_CLIENT_ID: 'string';
    JWT_SECRET: 'string';
  }
}
