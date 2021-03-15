// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', synccharacterAmount)
characterAmountRange.addEventListener('input', synccharacterAmount)  

function synccharacterAmount(e){
    var value = e.target.value = value
    characterAmountNumber.value = value
}