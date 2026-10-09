function changeTextById() {
  const element = document.getElementById("status-text");

  element.textContent = "Library status: DOM updated.";
}

function changeStyleByClass() {
  const elements = document.getElementsByClassName("featured-book");

  for (const element of elements) {
    element.style.color = "red";
  }
}

function changeTextByTag() {
  const elements = document.getElementsByTagName("li");

  for (const element of elements) {
    element.textContent = "Book selected by tag";
  }
}

function changeFirstWithQuerySelector() {
  const firstElement = document.querySelector(".query-book");

  firstElement.textContent = "First element changed by querySelector";
  firstElement.style.fontWeight = "bold";
}

function changeAllWithQuerySelectorAll() {
  const elements = document.querySelectorAll(".query-book");

  elements.forEach((element) => {
    element.textContent = "Element changed by querySelectorAll";
    element.style.color = "blue";
  });
}
