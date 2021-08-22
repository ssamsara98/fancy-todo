import { User } from './models/user.model';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      NODE_ENV: 'development' | 'test' | 'production';
      DATABASE_URL: string;
    }
  }

  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
