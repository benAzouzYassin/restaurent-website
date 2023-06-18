export function redirectTo(destination: string) {
  const currentUrl = window.location.href.split("/");
  currentUrl[currentUrl.length - 2] = destination;
  const newUrl = currentUrl.join("/");
  window.location.href = newUrl;
}
