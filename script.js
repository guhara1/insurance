const menuButton = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = primaryMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
