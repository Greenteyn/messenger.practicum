const routes = [
  { path: "/", page: "/index.html" },
  { path: "/login", page: "/src/pages/login/index.html" },
  { path: "/registration", page: "/src/pages/registration/index.html" },
  { path: "/profile", page: "/src/pages/profile/index.html" },
  { path: "/chat", page: "/src/pages/chat/index.html" },
  { path: "/error", page: "/src/pages/error/index.html" },
];

const validateUrl = (currentUrl) => {
  const pageObj = routes.find((route) => route.path === currentUrl);

  return pageObj ? pageObj.page : "/src/pages/error/index.html";
};

const loadPage = (filePath) => {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => (document.getElementById("app").innerHTML = text));
};

const router = () => {
  const currentLocation = location.pathname;

  const pageFile = validateUrl(currentLocation);

  loadPage(pageFile);
};

document.body.addEventListener("click", function (e) {
  if (e.target.nodeName != "A") return;
  if (e.target && e.target.nodeName == "A") {
    e.preventDefault();
    document.location.href = e.target.getAttribute('href');
  }
});

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
