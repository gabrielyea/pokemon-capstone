import access from '../api/api-access.js';
import routes from '../api/api-routes.js';
import display from '../interface/display.js';
import modal from '../interface/modal.js';

class Decorator {
  makeLike = (elementList) => {
    elementList.forEach((element) => {
      const heart = element.reference.querySelector('.like-btn');
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

  setActions = (element) => {
    const ref = element.reference;

    element.onLike.addActions(
      () => access.postApi(
        routes.LIKES, { item_id: element.name },
        () => element.onLikeComplete.doActions({}),
      ),
      element.addLikes,
      () => display.toggleLoadingState(ref.querySelector('.heart-icon')),
      () => display.toggleDisable(ref.querySelector('.like-btn')),
    );

    element.onLikeComplete.addActions(() => display.toggleLoadingState(ref.querySelector('.heart-icon')),
      () => display.toggleDisable(ref.querySelector('.like-btn')));

    element.onOpenComments.addActions(() => modal.openComments(element));
  }

  addCallbackOnAnimationEnd = (domElement, options) => {
    domElement.querySelector(options.mainQuery).addEventListener('animationend', (e) => {
      if (e.animationName === options.animationName) {
        options.callback(domElement.querySelector(options.toggleElement));
      }
    });
  }
}

const decorator = new Decorator();
export { decorator as default };
