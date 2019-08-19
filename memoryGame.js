let colors = ["greenyellow","black","red","yellow","orange","green","purple","blue","greenyellow","black","red","yellow","orange","green","purple","blue"];
let count = 0;
let cards = document.querySelectorAll(".card");
let checkColor = [];
colors.sort(function() {
  return 0.5 - Math.random();
});
function randomColor() {
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].lastElementChild.style.background = colors[i];
  }
}
randomColor();
function clickCarts() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].firstElementChild.addEventListener("click", () => {
      cards[i].firstElementChild.style.transform = "rotateY(180deg)";
      cards[i].lastElementChild.style.transform = "rotateY(0deg)";
      checkColor.push(cards[i], cards[i].lastElementChild.style.background);
      if (checkColor[1] !== checkColor[3] && checkColor.length === 4) {
        checkColor[0].lastElementChild.style.transform = "rotateY(180deg)";
        checkColor[0].firstElementChild.style.transform = "rotateY(0deg)";
        checkColor.splice(0, 2);
      } else if (checkColor[1] === checkColor[3] && checkColor.length === 4) {
        checkColor.splice(0, 4);
      }
    });
  }
}
clickCarts();