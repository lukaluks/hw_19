

const modal = document.getElementById("modal");

document.getElementById("open-modal").onclick = () => {
  modal.style.display = "flex";
};

document.getElementById("close-modal").onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


const radios = document.querySelectorAll("input");

radios.forEach(radio => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });

});


const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() ? nameInput.value : "незнайомець"; //Тернарний оператор
});


const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
});
