document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const card = document.querySelector(".card");
const menu = document.querySelector("#menu");
const card2 = document.querySelector(".card2");
const header = document.querySelector("header");
const footer = document.querySelector("footer");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        card.style.background = "#000";
        card2.style.background = "#000";
        menu.style.background = "#fff";
        header.style.background = "#666";
        footer.style.background = "#666";
        header.style.color = "#fff";
        footer.style.color = "#fff";

		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#f4f4f9";
		main.style.color = "#000";
        card2.style.background = "#fff";
        card.style.background = "#fff";
        menu.style.background = "#f4f4f9";
        header.style.background = "#bbb";
        footer.style.background = "#bbb";
        header.style.color = "#000";
        footer.style.color = "#000";
		modeButton.textContent = "🕶️";
        
	}
});