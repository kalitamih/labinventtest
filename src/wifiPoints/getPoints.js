import handlePoints from './handlePoints';
import { wifiPoints, errFetch } from '../constants';

const getPoints = () => new Promise((resolve, reject) => {
  fetch(wifiPoints)
    .then(response => response.json())
    .then(data => resolve(handlePoints(data)))
    .catch((error) => {
      const { message } = error;
      console.log(`${errFetch}${message}`);
      reject(message);
    });
});

export default getPoints;
