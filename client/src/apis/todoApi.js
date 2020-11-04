import Axios from 'axios';

const todoApi = Axios.create({
  baseURL: process.env.REACT_APP_TODO_API,
});

export default todoApi;
