const tomate = document.getElementById("tomate");
const jambon = document.getElementById("jambon");
const ananas = document.getElementById("ananas");
const roquette = document.getElementById("roquette");

function cuire() {
  var inv = document.getElementById("inv");

  let tomateValue = tomate.value;
  let jambonValue = jambon.value;
  let ananasValue = ananas.value;
  console.log(tomateValue, jambonValue, ananasValue);
  if (tomateValue == 1 && jambonValue == 3 && ananasValue == 3) {
    inv.innerHTML +=
      '<p class="text is-cooking">Pizza hawaienne' +
      displayPayload(getPayload(tomateValue, jambonValue, ananasValue)) +
      "</p>";
  } else if (
    tomateValue == 1 &&
    !jambonValue &&
    jambonValue == 0 &&
    !ananasValue &&
    ananasValue == 0
  ) {
    inv.innerHTML +=
      '<p class="text is-cooking">Pizza rucola' +
      displayPayload(getPayload(tomateValue, jambonValue, ananasValue)) +
      "</p>";
  } else {
    alert("Pas les bons ingredients");
  }
}

const getPayload = (tomate, jambon, ananas) => {
  let object = {};
  if (tomate && tomate != 0) {
    object.tomate = tomate;
  }
  if (jambon && jambon != 0) {
    object.jambon = jambon;
  }
  if (ananas && ananas != 0) {
    object.ananas = ananas;
  }

  return object;
};

const displayPayload = (payload) => {
  let finalString = " - En cours de cuisson, ";
  finalString += payload.tomate ? `${payload.tomate} tomate(s) ` : "";
  finalString += payload.jambon
    ? `${payload.jambon} tranche(s) de jambon `
    : "";
  finalString += payload.ananas ? `${payload.ananas} tranche(s) d'ananas ` : "";

  return finalString;
};

const getNameOfPizza = (string) => {
  return string.includes("hawaienne") ? "hawaienne" : "rucola";
};

const checkIfRoquette = (text) => {
  value = false;
  if (getNameOfPizza(text.innerHTML) == "hawaienne") {
    value = true;
  } else if (roquette.value == 7) {
    value = true;
  }
  return value;
};

/**
 * Change value of text to cooked
 */
const cookedPizza = () => {
  let text = document.querySelectorAll(".is-cooking")[0];
  console.log(text);
  if (text && checkIfRoquette(text)) {
    text.classList.remove("is-cooking");
    text.innerHTML = `Pizza ${getNameOfPizza(text.innerHTML)} (cuite)"`;
  }
};
