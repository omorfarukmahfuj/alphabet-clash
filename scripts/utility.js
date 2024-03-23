function addClassById(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.add(className);
}

function removeClassById(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className);
}

function isClassContain(elementId, className) {
  const element = document.getElementById(elementId);
  const hasMyClass = element.classList.contains(className);
  return hasMyClass;
}

function getARandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split('');
  const randomNumber = Math.random() * 25;
  const alphabetIndex = Math.round(randomNumber);
  const alphabet = alphabets[alphabetIndex];
  return alphabet;
}

function getTextElementValueById(elementId) {
  const currentElement = document.getElementById(elementId);
  const currentString = currentElement.innerText;
  const currentValue = parseInt(currentString);
  return currentValue;
}

function setTextElementValueById(elementId, value) {
  const currentElement = document.getElementById(elementId);
  currentElement.innerText = value;
}
