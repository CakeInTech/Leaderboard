import player from './leaderboard.js';

const form = (element) => {
  element.preventDefault();

  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;

  if (name === '' && score === '') {
    document.querySelector('.validation').style.display = 'block';
  } else {
    document.querySelector('.validation').style.display = 'none';
    player(name, score);
  }
};

export default form;