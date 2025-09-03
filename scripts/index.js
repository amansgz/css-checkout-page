const count = document.querySelectorAll(".count");
const incrementBtn = document.querySelectorAll(".increment-btn");
const decrementBtn = document.querySelectorAll(".decrement-btn");

count.forEach((item) => {
  item.textContent = 0;
});

incrementBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    count[index].textContent++;
  });
});

decrementBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (count[index].textContent == 0) {
      count[index].textContent = 0;
    } else {
      count[index].textContent--;
    }
  });
});
