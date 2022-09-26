const btnToggle = document.querySelector("#toggle-light");

btnToggle.addEventListener("click", function () {
  if (btnToggle.style.backgroundColor !== "black") {
    btnToggle.style.backgroundColor = "black";
    btnToggle.style.color = "white";
    btnToggle.style.boxShadow = "0 0 25px 25px yellow";
    document.body.style.backgroundColor = "black";
  } else {
    btnToggle.style.backgroundColor = "white";
    btnToggle.style.color = "black";
    btnToggle.style.boxShadow = "none";
    document.body.style.backgroundColor = "white";
  }
});
