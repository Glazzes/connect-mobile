import { User } from './User';

export interface ApplicationState {
    isLoggedIn: boolean;
    user: User;
}
