const app = document.getElementById("app");

const routes: Record<string, string> = {
  home: "<h2 class='text-2xl'>🏠 Bienvenido al Inicio</h2>",
  game: "<h2 class='text-2xl'>🎮 ¡Vamos a jugar!</h2>"
};

const render = (page: string) => {
  if (app) app.innerHTML = routes[page] || "<h2>404 - Página no encontrada</h2>";
};

document.getElementById("home-btn")?.addEventListener("click", () => render("home"));
document.getElementById("game-btn")?.addEventListener("click", () => render("game"));

render("home");
