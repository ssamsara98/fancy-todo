import { Request } from 'express';
import { User } from '../models/user.model';

const getUser = (req: Request<any, any, any, any>): User => {
  return (req as any).user as User;
};

export default getUser;
