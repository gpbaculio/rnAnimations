import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './constants';
import { RestoreTokenType, SignInType, SignOutType } from './context';

export const restoreToken = (token: string): RestoreTokenType => ({
  type: RESTORE_TOKEN,
  token,
});

export const signIn = (token: string): SignInType => ({
  type: SIGN_IN,
  token,
});

export const signOut = (): SignOutType => ({ type: SIGN_OUT });
