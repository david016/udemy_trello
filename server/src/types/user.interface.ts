import { Document } from "mongoose";

export interface UserInterface {
  email: string;
  username: string;
  password: string;
  crratedAt: Date;
}

export interface UserDocument extends UserInterface, Document {
  validatePasword(param1: string): string;
}
