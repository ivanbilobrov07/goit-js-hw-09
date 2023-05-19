import { getRandomHexColor } from './getRandomHexColor';

const body = document.body;
let INTERVAL_ID;

const onStartBtnClick = e => {
  e.target.setAttribute('disabled', 'disabled');

  body.style.backgroundColor = getRandomHexColor();

  INTERVAL_ID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

export { onStartBtnClick, INTERVAL_ID };
