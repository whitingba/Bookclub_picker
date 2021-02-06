

var nameArray = [];
let hostNameDiv = document.getElementById('desert');
let secondSpace = document.getElementById('desert2');
let thirdSpace = document.getElementById('desert3');
let bookHostName = document.getElementById('chosenHost');


function submitName() {
  let name1 = document.getElementById('FirstName').value;
  //console.log(name1);


  nameArray.push(name1);
  addNames();
}

//function to add names to the div with id 'desert'
function addNames() {

  //grab an id in the HTML and create a variable for a span
  let newSpan = document.createElement('span');

  //loop through the names give and insert them in to the HTML on their own line
  nameArray.forEach(function (eachName) {
    newSpan.innerHTML = eachName + "</br>";
  })
  hostNameDiv.appendChild(newSpan);

  addButton();
}


//add Randomizer button if there is more than one name in the array
function addButton() {
  let randomButton = document.getElementById('randomizerBtn');

  if (nameArray.length >= 2) {
    //console.log('there are 2 or more items in the array');
    // let newButton = document.createElement('button');
    // newButton.className = 'btn';
    // newButton.id = 'randomizerBtn';
    // newButton.innerHTML = "Pick Random host";
    // hostNameDiv.appendChild(newButton);

    //decided to include the button in the code instead of dynamically creating it, then I could hide or display depending on the conditions
    secondSpace.appendChild(randomButton);
    randomButton.style.display = "block";

  } else {
    randomButton.style.display = "none";
  }
}



//select a random bookclub host based on the selections available in the array
function selectRandom() {
  //select random name from Array
  let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
  //console.log('Random name: ' + randomName);
  bookHostName.innerHTML = '';
  bookHostName.style.color = 'blue';
  bookHostName.style.fontSize = "20px";
  bookHostName.innerHTML = "</br>" + randomName;



}





