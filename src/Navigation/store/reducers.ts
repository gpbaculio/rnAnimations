import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from './constants';
import { AuthActionTypes, StateType } from './context';

export const authenticationReducer = (
  state: StateType,
  action: AuthActionTypes,
): StateType => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: '',
      };
    default:
      return state;
  }
};
