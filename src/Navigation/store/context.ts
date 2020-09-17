import { createContext } from 'react';
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './constants';

export type StateType = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string;
};

export const initialState = {
  isLoading: false,
  isSignout: false,
  userToken: '',
};

export interface SignInType {
  type: typeof SIGN_IN;
  token: string;
}

export interface SignOutType {
  type: typeof SIGN_OUT;
}

export interface RestoreTokenType {
  type: typeof RESTORE_TOKEN;
  token: string;
}

export type AuthActionTypes = SignInType | SignOutType | RestoreTokenType;

export interface CredentialsType {
  email: string;
  password: string;
}

export interface AuthContextType {
  signIn: (credentials: CredentialsType) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: CredentialsType) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
});
