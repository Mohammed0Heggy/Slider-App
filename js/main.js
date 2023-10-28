const reviewsData = [
  {
    id: 1,
    name: "sara ahmed",
    review: "bla bla bla",
    imgURL: "../images/p1.jpg"
  },
  {
    id: 2,
    name: "alaa ahmed",
    review: "bla bla bla",
    imgURL: "../images/p2.jpg"
  },
  {
    id: 3,
    name: "gamal ahmed",
    review: "bla bla bla",
    imgURL: "../images/p3.jpg"
  }
];

let reviewEle = document.querySelector(".review");
let name = document.querySelector(".name");
let img = document.querySelector(".img");
let current = 0;

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function update() {
  let data = reviewsData[current];
  reviewEle.textContent = data.review;
  name.textContent = data.name;
  img.src = data.imgURL;
}
update()

next.addEventListener("click", () => {
  current++;
  if (current > reviewsData.length - 1) { current = 0 }
  update()
})
prev.addEventListener("click", () => {
  current--;
  if (current < 0) { current = reviewsData.length - 1 }
  update()
})