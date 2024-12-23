const routes = [
  { path: "/", page: "main" },
  { path: "/login", page: "login" },
  { path: "/registration", page: "registration" },
  { path: "/profile", page: "profile" },
  { path: "/chat", page: "chat" },
  { path: "/error", page: "error" },
];

const validateUrl = (currentUrl) => {
  return routes.find((route) => route.path === currentUrl)
    ? currentUrl
    : "/error";
};

const loadPage = (pageUrl) => {
  const filePath = `/src/pages${pageUrl}/index.html`;

  fetch(filePath)
    .then((response) => response.text())
    .then((text) => (document.getElementById("app").innerHTML = text));
};

const router = () => {
  const currentLocation = location.pathname;

  const pageUrl = validateUrl(currentLocation);

  loadPage(pageUrl);
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
