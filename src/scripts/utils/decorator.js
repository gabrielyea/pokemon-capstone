class Decorator {
  makeLike = (elementList) => {
    elementList.forEach((element) => {
      const heart = element.reference.querySelector('.like');
      heart.addEventListener('click', () => {
        element.onLike.doActions({});
      });
    });
  }

  makeOpenComments = (elementList) => {
    elementList.forEach((element) => {
      const commentsButton = element.reference.querySelector('.comments-button');
      commentsButton.addEventListener('click', () => {
        element.onOpenComments.doActions({});
      });
    });
  }
}

const decorator = new Decorator();
export { decorator as default };