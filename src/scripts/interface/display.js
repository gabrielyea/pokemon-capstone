class Display {
  updateLikes = (pokemon, value) => {
    pokemon.reference.querySelector('.like-text').innerText = value;
  }

  toggleLoadingState = (domElement) => {
    domElement.classList.toggle('loading');
  }

  toggleDisable = (domElement) => {
    domElement.disabled = !domElement.disabled;
  }

  setElementCount = (domElement, count) => {
    const text = domElement.innerText;
    domElement.innerText = `${text} (${count})`;
  }

  toggleLoaded = (domElement) => {
    domElement.classList.toggle('loaded');
  }
}

const display = new Display();
export { display as default };
