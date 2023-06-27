export function redirectTo(destination: string) {
  const currentUrl = window.location.href.split("/");
  currentUrl[currentUrl.length - 1] = destination;
  const newUrl = currentUrl.join("/");
  window.location.href = newUrl;
}
