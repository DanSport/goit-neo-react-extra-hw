import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

myAxios.setToken = token => {
  myAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

myAxios.unsetToken = () => {
  delete myAxios.defaults.headers.common.Authorization;
};

export default myAxios;
