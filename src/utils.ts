export function redirectTo(destination: string) {
  const currentUrl = window.location.href.split("/");
  currentUrl[currentUrl.length - 1] = destination;
  const newUrl = currentUrl.join("/");
  window.location.href = newUrl;
}
export const visibleAnimation = {
  x: 0,
  opacity: 1,
  transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
};
export const variantsLeft = {
  visible: visibleAnimation,
  hidden: {
    x: -100,
    opacity: 0,
  },
};
export const variantsRight = {
  visible: visibleAnimation,

  hidden: {
    x: 100,
    opacity: 0,
  },
};
export const variantsTop = {
  visible: {
    y: 0,

    opacity: 1,
  },

  hidden: {
    y: 100,
    opacity: 0,
  },
};
