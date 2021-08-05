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
    domElement.innerText = `(${count})`;
  }

  toggleLoaded = (domElement) => {
    domElement.classList.toggle('loaded');
  }

  toggleClass = (domElement, ...className) => {
    className.forEach((name) => {
      domElement.classList.toggle(name);
    });
  }

  clearClass = (domElement, ...className) => {
    className.forEach((name) => {
      domElement.classList.remove(name);
    });
  }

  addClass = (domElement, ...className) => {
    className.forEach((name) => {
      domElement.classList.add(name);
    });
  }
}

const display = new Display();
export { display as default };
