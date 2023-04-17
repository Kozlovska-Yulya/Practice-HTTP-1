const baseURL = 'https://643b033f4477945573532046.mockapi.io/api/v1/user';

const formElem = document.querySelector('.login-form');
const btnElem = document.querySelector('.submit-button');

const createUser = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    btnElem.removeAttribute('disabled');
  } else {
    btnElem.setAttribute('disabled', true);
  }
};
formElem.addEventListener('input', createUser);

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
  formElem.reset('');
};

btnElem.addEventListener('click', onFormSubmit);

const sendFormData = () => {
  return fetch(baseURL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(formData),
  });
};
