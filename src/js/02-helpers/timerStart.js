import { changeIntearface } from './changeIntearface';
import { convertMs } from './convertMs';
import { inputDate } from './checkingInputValue';

const timerStart = () => {
  const intervalID = setInterval(() => {
    const differenceOfDate = inputDate - Date.now();

    if (differenceOfDate <= 0) {
      clearInterval(intervalID);
      return;
    }

    changeIntearface(convertMs(differenceOfDate));
  }, 1000);
};

export { timerStart };
