const lists = document.querySelectorAll(".container div");
const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");

lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightContainer.addEventListener("drop", function () {
      if (!selected) return;
      this.appendChild(selected);
      selected = null;
    });
    leftContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftContainer.addEventListener("drop", function () {
      if (!selected) return;
      this.appendChild(selected);
      selected = null;
    });
  });
});
