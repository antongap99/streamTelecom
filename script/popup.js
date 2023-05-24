import { popupData } from "./data.js";
import { createPopup } from "./create.js";

export const popupController = () => {
  const auth = document.getElementById("auth");

  auth.addEventListener("click", () => {
    const popup = createPopup(popupData);
    document.body.append(popup);
  });

  document.addEventListener("click", ({ target }) => {
    if (
      target.classList.contains("overlay") ||
      target.classList.contains("modal__close")
    ) {
      const overlay = target.closest(".overlay");
      overlay.remove();
    }
  });
};
