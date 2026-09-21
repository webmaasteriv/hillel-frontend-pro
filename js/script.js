"use strict";

const tree = document.querySelectorAll("#tree li");

const texts = [];

for (const li of tree) {
    console.log(li);

    texts.push(li.firstChild.textContent.trim());
}

console.log("Кількість елементів:", tree.length);

console.log("Масив текстів:", texts);