const buttonContainer = document.querySelector('#buttonContainer');

buttonContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
      alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});