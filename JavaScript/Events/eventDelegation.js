let unOrderList = document.querySelector(".list");

unOrderList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert("list is clicked");
  }
});
