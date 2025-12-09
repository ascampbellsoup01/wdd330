async function renderScores() {
    const scores = await getLiveScores();
    const container = document.getElementById("content");
    container.innerHTML = "<h2>Live Scores</h2>";

    const list = document.createElement("ul");
    scores.forEach(game => {
        const item = document.createElement("li");
        item.textContent = `${game.strEvent} — ${game.intHomeScore} : ${game.intAwayScore}`;
        list.appendChild(item);
    });
    container.appendChild(list);
}

function showPage(page) {
    const container = document.getElementById("content");
    if (page === "home") renderScores();
    else container.innerHTML = `<h2>${page} page placeholder</h2>`;
}

showPage("home");
