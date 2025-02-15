const modal = document.getElementById("modal");
document.getElementById("open-modal").onclick = () =>
  (modal.style.display = "flex");
document.getElementById("close-modal").onclick = () =>
  (modal.style.display = "none");
modal.onclick = (e) => {
  if (e === modal) modal.style.display = "none";
};


function changeBackgroundColor() {
    document.body.style.backgroundColor = ;
}

const radioButtons = document.getElementsByName("color");
for (const radio of radioButtons) {
    radio.addEventListener("click", changeBackgroundColor);
}