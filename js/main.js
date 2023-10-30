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

let addNewBtn = document.getElementById("addNewBtn");
let closeFormBtn = document.getElementById("closeFormBtn");
let overlay = document.querySelector(".overlay");

addNewBtn.addEventListener("click", () => {
  overlay.style.display = "block"
})

closeFormBtn.addEventListener("click", () => {
  overlay.style.display = "none"
})

let reviewForm = document.querySelector(".addReview form");
reviewForm.addEventListener("submit", e => e.preventDefault())

let sendDataBtn = document.getElementById("sendDataBtn");
let formName = document.getElementById("name");
let formMessage = document.getElementById("message");
let formImg = document.getElementById("image");

sendDataBtn.addEventListener("click", () => {
  reviewsData.push({
    id: reviewsData.length + 1,
    name: formName.value,
    review: formMessage.value,
    imgURL: "images/" + formImg.value,
  })
  overlay.style.display = "none"
  console.log(reviewsData);
})

