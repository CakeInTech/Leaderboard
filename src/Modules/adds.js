import getData from './board.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a6thMPVCsujaK6fGW1FB/scores';

const getAPI = async () => {
  const response = await (await fetch(url)).json();
  getData(response);
};
const post = async (data) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getAPI, post };