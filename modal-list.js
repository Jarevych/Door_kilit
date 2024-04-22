const listItem = document.querySelector(".category-list");
const categoryImage = document.getElementById("listImage");
const liItem = document.querySelector(".modal-category-item");
let previousItem = null;
listItem.addEventListener("mouseover", function (e) {
  if (e.target.tagName === "LI") {
    const imgSrc = e.target.getAttribute("data-image");
    categoryImage.src = imgSrc;

    if (previousItem !== null) {
      previousItem.style.textDecoration = "none";
      previousItem.style.fontWeight = "normal";

    }
    e.target.style.textDecoration = "underline";
    e.target.style.fontWeight = "bold";


    previousItem = e.target;
    console.log(previousItem)
  }
});
