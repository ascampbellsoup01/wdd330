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

    const themeLabel = document.createElement("label");
    themeLabel.textContent = "Theme: ";
    const themeSelect = document.createElement("select");
    themeSelect.innerHTML = `
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    `;
    themeSelect.value = localStorage.getItem("theme") || "light";

    themeSelect.onchange = () => {
        localStorage.setItem("theme", themeSelect.value);
        applyTheme(themeSelect.value);
    };

    themeLabel.appendChild(themeSelect);
    container.appendChild(themeLabel);

    const notifLabel = document.createElement("label");
    notifLabel.textContent = "Enable Notifications: ";
    const notifCheckbox = document.createElement("input");
    notifCheckbox.type = "checkbox";
    notifCheckbox.checked = JSON.parse(localStorage.getItem("notifications") || "true");

    notifCheckbox.onchange = () => {
        localStorage.setItem("notifications", notifCheckbox.checked);
    };

    notifLabel.appendChild(notifCheckbox);
    container.appendChild(notifLabel);

    const langLabel = document.createElement("label");
    langLabel.textContent = "Language: ";
    const langSelect = document.createElement("select");
    langSelect.innerHTML = `
        <option value="en">English</option>
        <option value="ko">Korean</option>
        <option value="es">Spanish</option>
    `;
    langSelect.value = localStorage.getItem("language") || "en";

    langSelect.onchange = () => {
        localStorage.setItem("language", langSelect.value);
    };

    langLabel.appendChild(langSelect);
    container.appendChild(langLabel);
}

renderPreferences();

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#eee";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}

applyTheme(localStorage.getItem("theme") || "light");