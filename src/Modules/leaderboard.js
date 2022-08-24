import { post, getAPI } from './adds.js';

const player = (name, score) => {
  const elementArray = { user: name, score };
  post(elementArray);
  getAPI();
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default player;