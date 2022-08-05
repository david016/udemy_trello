import { Document } from "mongoose";

export interface User {
  email: string;
  username: string;
  password: string;
  crratedAt: Date;
}

export interface UserDocument extends User, Document {
  validatePasword(param1: string): Promise<boolean>;
}
