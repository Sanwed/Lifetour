const initForm = () => {
  const consultForm = document.querySelector('[data-form]');
  const inputs = consultForm.querySelectorAll('[data-input]');
  const inputContainers = consultForm.querySelectorAll('[data-input-container]');
  consultForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (Array.from(inputs).every((input, id) => input.value !== '' && !inputContainers[id].classList.contains('is-invalid'))) {
      inputs.forEach((input) => {
        input.value = '';
      });
    }
  });
};

export {initForm};
