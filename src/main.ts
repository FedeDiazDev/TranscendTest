import { navigateTo } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-home")?.addEventListener("click", () => navigateTo("/"));
  document.getElementById("nav-game")?.addEventListener("click", () => navigateTo("/game"));
});
