import { 
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from '../actionTypes';

export const signupUser = (userData, history) => ({
  type: SIGNUP_USER,
  payload: userData,
  history
});

export const signupUserSuccess = (userData) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: userData
});

export const signupUserFailure = (error) => ({
  type: SIGNUP_USER_FAILURE,
  error
});
