import { getNewsFeed } from "./services.js";

async function renderNews() {
    const container = document.getElementById("content");
    container.innerHTML = "<h2>Sports News</h2>";

    try {
        const news = await getNewsFeed();
        const list = document.createElement("ul");

        news.forEach(article => {
            const item = document.createElement("li");
            item.textContent = article.title || "Untitled headline";
            list.appendChild(item);
        });

        container.appendChild(list);
    } catch (err) {
        container.innerHTML += `<p style="color:red">Error loading news: ${err.message}</p>`;
    }
}

renderNews();