import { createPromise } from './createPromise';
import Notiflix from 'notiflix';

const generatePromises = ({ firstDelay, step, amount }) => {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅  Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌  Rejected promise ${position} in ${delay}ms`
        );
      });

    firstDelay += step;
  }
};

export { generatePromises };
