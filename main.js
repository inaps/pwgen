import { getRandomChar, getRandomInt, replaceAt } from "./utils.js";

const VOWELS = ["a", "e", "i", "o", "u", "y"]
const CONSONANTS = ["b","c","d","f","g","h","k","m","n","p","q","r","s","t","v","w","x","z"]

const SET = {
  uppercase: "ABCDEFGHJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
}

const getValue = (inputValue, defaultValue) => {
  const preformed = Math.abs(inputValue);

  if (isNaN(preformed) || preformed > 128 || preformed === 0) {
    return defaultValue;
  }

  return inputValue;
}

const generate = () => {
  const result = document.querySelector("#result");
  const length = document.querySelector("#inputLength").value;
  const count = document.querySelector("#inputCount").value;
  const passwords = getPasswords(getValue(length, 20), getValue(count, 1));

  result.innerHTML = passwords
    .map(item =>
      `<div class="password">
          <span>${item}</span>
        </div>`)
    .join("")
}

const getPasswords = (length, count) => {
  const passwords = [];

  for (let i = 0; i < count; i++) {
    passwords.push(getPassword(length))
  }

  return passwords
}

const getPassword = (length) => {
  const uppercase = getRandomChar(SET.uppercase)
  const number = getRandomChar(SET.numbers)
  const lowercase = [];

  for (let i = 0; lowercase.length < length; i++) {
    lowercase.push(getRandomChar(CONSONANTS))
    lowercase.push(getRandomChar(VOWELS))
  }

  let result = lowercase.join("")
  result = replaceAt(result, uppercase, getRandomInt(length))
  result = replaceAt(result, number, getRandomInt(length))

  return result
}

const init = () => {
  document.querySelector("#btnGenerate").addEventListener('click', generate);
  generate();
}

init();

