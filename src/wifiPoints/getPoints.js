import handlePoints from './handlePoints';
import { WifiPoints, ErrFetch } from '../constants';

const getPoints = () => new Promise((resolve, reject) => {
  fetch(WifiPoints)
    .then(response => response.json())
    .then(data => resolve(handlePoints(data)))
    .catch((error) => {
      const { message } = error;
      console.log(`${ErrFetch}${message}`);
      reject(message);
    });
});

export default getPoints;
