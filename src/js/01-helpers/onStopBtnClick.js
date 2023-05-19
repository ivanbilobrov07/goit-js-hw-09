import { INTERVAL_ID } from './onStartBtnClick';
import { startBtnRef } from '../01-color-switcher';

const onStopBtnClick = () => {
  startBtnRef.removeAttribute('disabled');

  clearInterval(INTERVAL_ID);
};

export { onStopBtnClick };
