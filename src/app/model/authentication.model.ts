import { User } from './user.model';

export interface AuthenticationState {
  loggedIn: boolean;
  user?: User;
  token?: string;
}
