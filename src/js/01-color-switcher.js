import { onStartBtnClick } from './01-helpers/onStartBtnClick';
import { onStopBtnClick } from './01-helpers/onStopBtnClick';

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

export { startBtnRef };
