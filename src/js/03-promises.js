import { onFormSubmit } from './03-helpers/onFormSubmit';

const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onFormSubmit);
