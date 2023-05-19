import Notiflix from 'notiflix';

import { startBtnRef } from '../02-timer';

let inputDate;

const checkingInputValue = date => {
  inputDate = Date.parse(date);
  const nowDate = Date.now();

  if (inputDate <= nowDate) {
    Notiflix.Notify.failure('Please choose a date in the future');

    startBtnRef.setAttribute('disabled', 'disabled');
    return;
  }

  startBtnRef.removeAttribute('disabled');
};

export { checkingInputValue, inputDate };
