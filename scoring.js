let score = 0;

let btnNext = (ele) => {
  ele.parentElement.classList.toggle('hidden');
  ele.parentElement.nextElementSibling.classList.toggle('hidden');

  for (i = 0; i < ele.parentElement.length; i++) {
    if (ele.parentElement.elements[i].checked) {
      score += parseInt(ele.parentElement.elements[i].value);
    }
  }

  if (ele.parentElement.id === "spm3") {
    document.body.innerHTML = "Du scorede: " + score + " point!";
  }
}
