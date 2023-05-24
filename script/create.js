
const createElem = ({ cssClass, children, tag = "div", src }) => {
  const elem = document.createElement(tag);
  elem.classList.add(cssClass);

  if (children && Array.isArray(children)) {
    elem.append(...children);
  } else if (children) {
    elem.append(children);
  }

  if (tag === "img") elem.src = src;

  return elem;
};

export const createPopup = (data) => {
  const description = createElem({
    tag: "p",
    cssClass: "modal__description",
    children: data.description,
  });

  const title = createElem({
    cssClass: "modal__title",
    tag: "h1",
    children: data.title,
  });

  const close = createElem({
    cssClass: "modal__close",
    tag: "img",
    src: "./../assets/icons/close.svg",
  });

  const modal = createElem({
    cssClass: "modal",
    children: [title, description, close],
  });

  const overlay = createElem({
    cssClass: "overlay",
    children: modal,
    tag: "div",
  });

  return overlay;
};
