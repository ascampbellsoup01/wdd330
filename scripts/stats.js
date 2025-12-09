import { getPlayerStats } from "./services.js";

async function renderStats(playerName = "Lionel Messi") {
    const container = document.getElementById("content");
    container.innerHTML = `<h2>Player Stats</h2>
    <label>Search player: <input id="playerInput" placeholder="Enter player name"></label>
    <button id="searchBtn">Search</button>
    <div id="results"></div>`;

    document.getElementById("searchBtn").onclick = async () => {
        const name = document.getElementById("playerInput").value || playerName;
        const stats = await getPlayerStats(name);
        const results = document.getElementById("results");
        results.innerHTML = "";

        if (!stats.length) {
            results.textContent = "No stats found.";
            return;
        }

        const list = document.createElement("ul");
        stats.forEach(p => {
            const item = document.createElement("li");
            item.textContent = `${p.strPlayer} (${p.strTeam}) — Position: ${p.strPosition}, Nationality: ${p.strNationality}`;
            list.appendChild(item);
        });
        results.appendChild(list);
    };
}

renderStats();