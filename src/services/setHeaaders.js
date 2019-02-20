import axios from 'axios';
import Cookie from 'js-cookie';


export const setToken = () => {
  const token = Cookie.get('jwt-token');
  return axios.defaults.headers.common['Authorization']=token;
}

export const resolveUrl = () => {

}