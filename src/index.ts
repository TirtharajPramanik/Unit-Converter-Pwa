const data = new File(["woo"], "war.txt", { type: "text/plain" });
const possible = navigator.canShare({ files: [data] });

let fragment = document.createDocumentFragment();
let div = document.createElement("div");
div.innerHTML = `<h1>possible: ${possible}</h1>`;
fragment.appendChild(div);

document.body.appendChild(fragment);
