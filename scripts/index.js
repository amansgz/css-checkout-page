const counter = document.querySelectorAll('.counter');
const incrementCount = document.querySelectorAll('.increment-count');
const decrementCount = document.querySelectorAll('.decrement-count');

counter.forEach((item, index) => {
  item.textContent = 1;  
});

incrementCount.forEach((item, index) => {
  item.addEventListener('click', () => {
    counter[index].textContent++; 
  })
});

decrementCount.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(counter[index].textContent == 0) {
      counter[index].textContent=0; 
    } else {
      counter[index].textContent--; 
    }
  })
});