import { generatePromises } from './generatePromises';

const onFormSubmit = e => {
  e.preventDefault();
  const elements = [...e.currentTarget.elements];

  const data = {
    firstDelay: +elements.find(elem => elem.getAttribute('name') === 'delay')
      .value,
    step: +elements.find(elem => elem.getAttribute('name') === 'step').value,
    amount: +elements.find(elem => elem.getAttribute('name') === 'amount')
      .value,
  };

  generatePromises(data);
};

export { onFormSubmit };
