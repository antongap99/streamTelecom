const createElem = ({ cssClass, children, tag = "div" }) => {
  const elem = document.createElement(tag);
  elem.classList.add(cssClass);
  elem.append(...children);
  return elem;
};

const createClose = (cssClass) => {
  const svg = `<svg class=${cssClass} width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.1464 5.14645C18.3417 4.95118 18.6583 4.95118 18.8536 5.14645C19.0488 5.34171 19.0488 5.65829 18.8536 5.85355L12.7071 12L18.8536 18.1464C19.0488 18.3417 19.0488 18.6583 18.8536 18.8536C18.6583 19.0488 18.3417 19.0488 18.1464 18.8536L12 12.7071L5.85355 18.8536C5.65829 19.0488 5.34171 19.0488 5.14645 18.8536C4.95118 18.6583 4.95118 18.3417 5.14645 18.1464L11.2929 12L5.14645 5.85355C4.95118 5.65829 4.95118 5.34171 5.14645 5.14645C5.34171 4.95118 5.65829 4.95118 5.85355 5.14645L12 11.2929L18.1464 5.14645Z" />
  </svg>`;
  return svg;
};

export const createPopup = (data) => {
  const description = createElem({
    tag: "p",
    cssClass: "modal__description",
    children: [data.description],
  });

  const title = createElem({
    cssClass: "modal__title",
    tag: "h2",
    children: [data.title],
  });

  const modal = createElem({
    cssClass: "modal",
    children: [title, description],
  });

  modal.insertAdjacentHTML("beforeend", createClose("modal__close"));

  const overlay = createElem({
    cssClass: "overlay",
    children: [modal],
    tag: "div",
  });

  return overlay;
};
