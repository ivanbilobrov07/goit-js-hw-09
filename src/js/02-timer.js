import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { checkingInputValue } from './02-helpers/checkingInputValue';
import { timerStart } from './02-helpers/timerStart';

const inputDateRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');

startBtnRef.setAttribute('disabled', 'disabled');
startBtnRef.addEventListener('click', timerStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkingInputValue(selectedDates[0]);
  },
};

const fpaas = flatpickr(inputDateRef, options);

export { startBtnRef, fpaas };
