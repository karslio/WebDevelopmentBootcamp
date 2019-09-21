//main div
function createAndAppend(child, append, text, elclass, src) {
  const el = document.createElement(child);
  append.appendChild(el);
  el.innerHTML = text;
  el.className = elclass;
  el.src = src;
  return el;
}

// const mainDiv = document.createElement("div");
// document.body.appendChild(mainDiv);
const mainDiv = createAndAppend("div", document.body, "text is");

const space = createAndAppend("br", mainDiv);

const logo = document.createElement("img");
mainDiv.appendChild(logo);
logo.src = "wiki.jpg";

const space1 = createAndAppend("br", mainDiv);

const searchInput = document.createElement("input");
mainDiv.appendChild(searchInput);

// const searchButton = document.createElement("button");
// mainDiv.appendChild(searchButton);
// searchButton.innerHTML = "click";

const searchButton = createAndAppend(
  "button",
  mainDiv,
  "searchbutton",
  "elClass"
);

const randomButton = document.createElement("button");
mainDiv.appendChild(randomButton);
randomButton.innerHTML = "try";

const myFoot = document.createElement("nav");
document.body.appendChild(myFoot);
myFoot.innerHTML = "copyright";

function findEvenIndex(e) {
  for (let i = 1; i < e.length; i++) {
    var arr = e.slice(1, e.length);
    console.log(arr)
    var arretotal = arr.reduce((a,b) => a+b,0)
    console.log(arretotal)
    var arrleft = e.slice(0, i);
    var arrlefttotal = arrleft.reduce((a, b) => a + b, 0);
    var arrright = e.slice(i+1, e.length);
    var arrrighttotal = arrright.reduce((a, b) => a + b, 0);
    

    if (arrlefttotal === arrrighttotal || arretotal === 0) {
      return i;
    }
    if (i === e.length - 1) {
      return -1;
    }
  }
}

a = [1]
console.log(a.length) ;

console.log(findEvenIndex([1]));
