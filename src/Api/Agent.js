import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) config.headers["X-Jwt-Token"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "https://technotes-api.herokuapp.com/";

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const auth = {
  getAuth: (body) => request.post(`api/v1/auth`, body),
};

const notes = {
  addNotes: (body) => request.post(`api/v1/note`, body),
  noteDetails: (id) => request.get(`api/v1/note/${id}`),
  noteList: () => request.get(`api/v1/note`),
  noteEdit: (id, body) => request.put(`api/v1/note/${id}`, body),
  noteDelete: (id) => request.del(`api/v1/note/${id}`),
};

const share = {
  sharedUserList: () => request.get(`/api/v1/note/user/shared-by-me`),
  sharedNoteList: () => request.get(`/api/v1/note/share`),
  shareNote: (body) => request.post(`api/v1/note/share`, body)
  // editSharedNote: (id, body) => request.put(`/api/v1/note/share/${id}`, body),
};

export default { auth, notes, share };
