const baseURL = 'https://643b033f4477945573532046.mockapi.io/api/v1/user';

const formElem = document.querySelector('.login-form');
const btnElem = document.querySelector('.submit-button');

const createUser = () => {
  if (formElem.reportVality()) {
    btnElem.removeAttribute('disabled');
  } else {
    btnElem.setAttribute('disabled', true);
  }
};
formElem.addEventListener('input', createUser);
