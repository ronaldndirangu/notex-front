import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/v1';

class AuthApi {
  static loginUser(userData) {
    return axios.post(`${baseUrl}/auth/signin`, userData);
  }

  static signupUser(userData) {
    return axios.post(`${baseUrl}/auth/signup`, userData);
  }
}

export default AuthApi;
