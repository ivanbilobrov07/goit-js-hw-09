const dateRefs = {
  daysOutputRef: document.querySelector('[data-days]'),
  hoursOutputRef: document.querySelector('[data-hours]'),
  minutesOutputRef: document.querySelector('[data-minutes]'),
  secondsOutputRef: document.querySelector('[data-seconds]'),
};

const changeIntearface = ({ days, hours, minutes, seconds }) => {
  dateRefs.daysOutputRef.textContent = days;
  dateRefs.hoursOutputRef.textContent = hours;
  dateRefs.minutesOutputRef.textContent = minutes;
  dateRefs.secondsOutputRef.textContent = seconds;
};

export { changeIntearface };
