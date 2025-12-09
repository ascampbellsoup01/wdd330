function renderPreferences() {
    const container = document.getElementById("content");
    container.innerHTML = "<h2>User Preferences</h2>";

    const input = document.createElement("input");
    input.placeholder = "Enter favorite team";
    const button = document.createElement("button");
    button.textContent = "Save";

    button.onclick = () => {
        localStorage.setItem("favoriteTeam", input.value);
        alert("Saved preference: " + input.value);
    };

    container.appendChild(input);
    container.appendChild(button);

    const saved = localStorage.getItem("favoriteTeam");
    if (saved) {
        const p = document.createElement("p");
        p.textContent = "Current favorite team: " + saved;
        container.appendChild(p);
    }
}

renderPreferences();