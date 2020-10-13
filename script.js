const generatePassword = length => {
  document.querySelector("#password").innerHTML = createPassword(length);
}

const createPassword = length => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = lowercase.toUpperCase();
  const numbers = "0123456789";
  
  const [lower, upper, num] = [
    Math.ceil(length/3),
    Math.ceil(length/3),
    length - 2 * Math.ceil(length/3),
  ]
  
  const passwordCharacters = shuffle([
    ...getCharacters(lower, lowercase),
    ...getCharacters(upper, uppercase),
    ...getCharacters(num, numbers)
  ]);
  
  const password = passwordCharacters.join("");
  
  return password;
}

const getCharacters = (length, string) => {
  let characters = [];
  for(let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * string.length);
    characters[i] = string.charAt(random);
  }
  return characters;
}

const shuffle = array => {
  return array.sort(() => Math.random() - 0.5);
}