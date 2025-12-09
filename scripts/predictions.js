import { getLiveScores } from "./services.js";

async function renderPredictions() {
    const container = document.getElementById("content");
    container.innerHTML = "<h2>Fantasy Predictions</h2>";

    const scores = await getLiveScores();
    const list = document.createElement("ul");

    scores.forEach(game => {
        const projection = Math.round(((game.intHomeScore || 0) + (game.intAwayScore || 0)) / 2 * (1 + Math.random()));
        const item = document.createElement("li");
        item.textContent = `${game.strEvent} → Projected Fantasy Points: ${projection}`;
        list.appendChild(item);
    });

    container.appendChild(list);
}

renderPredictions();