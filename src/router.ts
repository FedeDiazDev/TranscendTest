const routes: Record<string, () => string> = {
    "/": () => "<h2 class='text-2xl'>🏠 Bienvenido al Inicio</h2>",
    "/game": () => "<h2 class='text-2xl'>🎮 ¡Vamos a jugar Pong!</h2>",
  };
  
  const render = () => {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = (routes[window.location.pathname] || (() => "<h2>404 - Página no encontrada</h2>"))();
    }
  };
  
  window.addEventListener("popstate", render);
  
  export const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    render();
  };
  