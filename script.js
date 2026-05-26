const menuButton = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");
const navItems = document.querySelectorAll(".nav-item");

menuButton?.addEventListener("click", () => {
  const isOpen = primaryMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navItems.forEach((item) => {
  const trigger = item.querySelector(".nav-trigger");

  trigger?.addEventListener("click", () => {
    const isSmallScreen = window.matchMedia("(max-width: 820px)").matches;
    if (!isSmallScreen) return;

    const isOpen = item.classList.toggle("is-expanded");
    trigger.setAttribute("aria-expanded", String(isOpen));

    navItems.forEach((otherItem) => {
      if (otherItem === item) return;
      otherItem.classList.remove("is-expanded");
      otherItem.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  });
});

document.addEventListener("click", (event) => {
  if (primaryMenu?.contains(event.target) || menuButton?.contains(event.target)) return;

  primaryMenu?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  navItems.forEach((item) => {
    item.classList.remove("is-expanded");
    item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
  });
});
