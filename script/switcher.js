export const switchThemeController = () => {
  const swither = document.getElementById("swither");

  swither.addEventListener("click", (e) => {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
};
