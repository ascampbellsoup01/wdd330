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

export async function getNewsFeed() {
    const url = `${SPORTMONKS_BASE_URL}/football/news?api_token=${SPORTMONKS_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Sportmonks API error");
    const data = await res.json();
    return data.data || [];
}

const SPORTMONKS_BASE_URL = "https://api.sportmonks.com/v3";
const SPORTMONKS_API_KEY = "yP9ZLwDZJJQGTO262lO9bfhgofyYYpqOmNdXR8e477UOc3tIcmKvdEUiTJny";

async function getNewsFeed() {
    const url = `${SPORTMONKS_BASE_URL}/football/news?api_token=${SPORTMONKS_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Sportmonks API error");
    const data = await res.json();
    return data.data || [];
}

async function getInjuryUpdates() {
    const url = `${SPORTMONKS_BASE_URL}/football/injuries?api_token=${SPORTMONKS_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
}

async function getPlayerStats(playerName) {
    const url = `${BASE_URL}/${API_KEY}/searchplayers.php?p=${encodeURIComponent(playerName)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return data.player || [];
}

export { getPlayerStats };

getNewsFeed();
getInjuryUpdates();

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";
const API_KEY = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";

export async function getLiveScores(date = "2025-12-08") {
    const url = `${BASE_URL}/${API_KEY}/eventsday.php?d=${date}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("TheSportsDB API error");
    const data = await res.json();
    return data.events || [];
}

async function loadScores() {
    const res = await fetch("https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328");
    const data = await res.json();
    renderScores(data.events);
}

async function loadNews() {
    const res = await fetch("https://newsapi.org/v2/everything?q=sports&apiKey=YOUR_KEY");
    const data = await res.json();
    renderNews(data.articles);
}