class Display {
  updateLikes = (domElement, value) => {
    domElement.querySelector('.like-text').innerText = value;
  }
}

const display = new Display();
export { display as default };