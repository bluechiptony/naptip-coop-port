import { User } from './user.model';

export interface AuthenticationState {
  loggedIn: boolean;
  user?: User;
  token?: string;
}

export interface AdminContext {
  context: string;
}

export interface AuthenticationProfile {
  authenticationId?: number;
  userCode: string;
  emailAddress: string;
  active?: boolean;
  accountType: string;
  password?: string;
  verificationCode?: string;
  verificationCodeExpiry?: number;
}

export interface PasswordRequest {
  password: string;
  token: string;
}
