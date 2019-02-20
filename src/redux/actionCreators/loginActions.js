import { 
  LOGIN_USER, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE 
} from '../actionTypes';

export const loginUser = (userData, history) => ({
  type: LOGIN_USER,
  payload: userData,
  history
});

export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  error
});
