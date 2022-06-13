const app = document.querySelector("#app");
app.style.display = "flex";

for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.style.width = "10rem";
    card.style.height = "10rem";
    card.style.margin = "1rem";
    app.appendChild(card)
}

const cards = document.querySelectorAll("#app div");
const numberOfSelected = document.createElement("p");
cards.forEach(e => {
    e.classList.add("red");
    e.addEventListener("click", () => {
        if (e.classList.contains("red")) {
            e.classList.replace("red", ["green"]);
        } else {
            e.classList.replace("green", ["red"]);
        }
        const selected = document.querySelectorAll(".green");
        numberOfSelected.innerHTML = selected.length;
    })
})
app.appendChild(numberOfSelected)

