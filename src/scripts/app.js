import { renderHome } from "./home.js";

function showPage(page) {
    const container = document.getElementById("content");
    if (page === "home") {
        renderHome();
    } else {
        container.innerHTML = `<h2>${page} page placeholder</h2>`;
    }
}

showPage("home");