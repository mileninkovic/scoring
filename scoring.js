let buttons = document.getElementsByClassName("btn");
let buttonsArray = Array.from(buttons);
let score = 0;

buttonsArray.forEach(btn => {
  btn.addEventListener("click", function() {
    btnNext(this);
  })
});

let btnNext = (ele) => {
  ele.parentElement.classList.toggle('hidden');

  for (i = 0; i < ele.parentElement.length; i++) {
    if (ele.parentElement.elements[i].checked) {
      score += parseInt(ele.parentElement.elements[i].value);
    }
  }

  if (ele.parentElement.id !== "q3") {
    ele.parentElement.nextElementSibling.classList.toggle('hidden');
  }
  
  if (ele.parentElement.id === "q3") {
    document.body.innerHTML = "Your scored: " + score + " points!";
  }
}

