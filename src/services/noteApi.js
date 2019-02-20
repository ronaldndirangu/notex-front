import axios from 'axios';
import { setToken} from './setHeaaders';

const baseUrl = 'http://localhost:5000/api/v1';

setToken();

class NoteApi {
  static getNotes() {
    return axios.get(`${baseUrl}/notes`);
  }
  static getNote(noteId) {
    return axios.get(`${baseUrl}/notes/${noteId}`)
  }
 };

 export default NoteApi;
