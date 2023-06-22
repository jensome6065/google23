var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  displayScript.innerHTML = "hello, my name is " + name;
}

var factList = [
  "Make a personal budget",
  "Track your spending",
  "Save for retirement",
  "Save for emergencies",
  "Plan to pay off debt",
  "Establish good credit habits",
  "Improve your money mindset"
];

var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count === factList.length) {
    count = 0;
  }
}

var numbersBar = document.querySelector('.numbers-bar');
var numbersLine = document.querySelector('.numbers-line');
var numbersMarker = document.querySelector('.numbers-marker');
var savingsInput = document.getElementById('savings');
var weeksInput = document.getElementById('weeks');
var calculateButton = document.getElementById('calculateButton');

var maxPosition = numbersBar.offsetWidth - numbersMarker.offsetWidth;
numbersMarker.style.left = '0';

numbersMarker.addEventListener('drag', function(event) {
  var currentPosition = event.clientX - numbersBar.getBoundingClientRect().left;
  if (currentPosition >= 0 && currentPosition <= maxPosition) {
    numbersMarker.style.left = currentPosition + 'px';
    var percentPosition = currentPosition / maxPosition;
    var savings = Math.round(percentPosition * 300);
    savingsInput.value = savings;
  }
});

calculateButton.addEventListener('click', function() {
  var savings = savingsInput.value;
  var weeks = Math.ceil(10000 / savings); 
  weeksInput.value = weeks;
  document.getElementById('result').textContent = 'It will take you approximately ' + weeks + ' weeks to save up and buy a car.';
});