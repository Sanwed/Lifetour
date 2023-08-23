const initForm = () => {
  const consultForm = document.querySelector('[data-form]');
  const inputs = consultForm.querySelectorAll('[data-input]');
  consultForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    inputs.forEach((input) => {
      input.value = '';
    });
  });
};

export {initForm};
