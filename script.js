// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var options = ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28",
          "29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47",
          "48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69",
          "70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91",
          "92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111",
          "112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128"];


function generatePassword() {

  var userChoice = prompt("Enter number of characters desired (8-100)");

  if (!options.includes(userChoice)) {
    alert("The option selected " + userChoice + " is not a number between 8-128.")
    return;
  };

  var userChoiceValue = parseInt(userChoice);

  console.log(typeof userChoiceValue);
  console.log(userChoiceValue);

  var minimumAmount = 0;

  var lowerCaseQuery = confirm("Allow use of lower case letters?");
    
  var upperCaseQuery = confirm("Allow use of upper case letters?");

  var symbolsQuery = confirm("Allow use of symbols?");

  var numbersQuery = confirm("Allow use of numbers?");

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSymbols = "";

  // RNG Machine that pulls from char-codes
  // Char codes guide: http:///www.net-comber.com/charset.html
  // Symbols was impractical, using local string instead.

  const randomFunc = {
    getRandomLower,
    getRandomUpper,
    getRandomSymbol,
    getRandomNumber
  };

  function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols [Math.floor(Math.random() * symbols.length)];
  }

  function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  
  if (lowerCaseQuery === true) {
    minimumLowerCases = randomFunc.getRandomLower();
    minimumAmount++;

  }

  if (upperCaseQuery === true) {
    minimumUpperCases= randomFunc.getRandomUpper();
    minimumAmount++;

  }

  if (numbersQuery === true) {
    minimumNumbers = randomFunc.getRandomNumber();
    minimumAmount++;

  }

  if (symbolsQuery === true) {
    minimumSymbols = randomFunc.getRandomSymbol();
    minimumAmount++;

  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (userChoiceValue - minimumAmount); i ++) {

    var randomNumberChosen = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberChosen;

  }

  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumSymbols;

  console.log(randomPasswordGenerated);
  return randomPasswordGenerated;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
