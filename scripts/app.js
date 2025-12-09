import { renderHome } from "./home.js";
import { renderPredictions } from "./predictions.js";
import { renderNews } from "./news.js";
import { renderPreferences } from "./preferences.js";

function showPage(page) {
    const container = document.getElementById("content");
    if (page === "home") renderHome();
    else if (page === "predictions") renderPredictions();
    else if (page === "news") renderNews();
    else if (page === "settings") renderPreferences();
    else container.innerHTML = `<h2>${page} page placeholder</h2>`;
}

showPage("home");