function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        res({ position, delay });
      }

      rej({ position, delay });
    }, delay);
  });
}

export { createPromise };
