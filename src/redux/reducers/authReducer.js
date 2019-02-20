import { 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from '../actionTypes';

const initialState = {
  user: {},
  error: {},
  isLoading: false
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        isLoading: false
      }
    case LOGIN_USER_FAILURE:
      return {
        error: action.error,
        isLoading: false
      }
    case SIGNUP_USER:
      return {
        isLoading: true
      }
    case SIGNUP_USER_SUCCESS:
      return {
        user: action.payload,
        isLoading: false
      }
    case SIGNUP_USER_FAILURE:
      return {
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  };
};

export default authReducer;
