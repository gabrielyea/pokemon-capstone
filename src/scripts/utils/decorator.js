class Decorator {
  makeLike = (elementList) => {
    elementList.forEach((element) => {
      const heart = element.reference.querySelector('.like');
      heart.addEventListener('click', () => {
        element.onLike.doActions({});
      });
    });
  }
}

const decorator = new Decorator();
export { decorator as default };