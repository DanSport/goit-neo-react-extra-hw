import axios from 'axios';

const myAxios = axios;

// myAxios.defaults.baseURL = 'https://66d34425184dce1713cfc2db.mockapi.io';
myAxios.defaults.baseURL = 'https://connections-api.goit.global';

myAxios.setToken = token => {
  myAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
myAxios.unsetToken = () => {
  myAxios.defaults.headers.common.Authorization = '';
};

export { myAxios };