import { getRandomChar, getRandomInt, replaceAt } from "./utils.js";

const SET = {
  lowercase: "abcdefghijkmnopqrstuvwxyz",
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
  const passwords = getPasswords(getValue(length, 16), getValue(count, 4));

  result.innerHTML = passwords.map(item => `<div class="password">${item}</div>`).join("")
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

  for (let i = 0; i < length; i++) {
    lowercase.push(getRandomChar(SET.lowercase))
  }

  let result = lowercase.join("")
  result = replaceAt(result, uppercase, getRandomInt(length))
  result = replaceAt(result, number, getRandomInt(length))

  return result
}

document.querySelector("#btnGenerate").addEventListener('click', generate)
