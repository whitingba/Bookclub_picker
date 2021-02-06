

var nameArray = [];
let newSpace = document.getElementById('desert');


function submitName() {
  let name1 = document.getElementById('FirstName').value;
  //console.log(name1);


  nameArray.push(name1);
  addNames();
}

function addNames() {

  //grab an id in the HTML and create a variable for a span

  let newSpan = document.createElement('span');

  //loop through the names give and insert them in to the HTML on their own line
  nameArray.forEach(function (eachName) {
    newSpan.innerHTML = eachName + "</br>";
  })
  newSpace.appendChild(newSpan);
  addButton();
}
//add Randomizer button if there is more than one name in the array
function addButton() {

  if (nameArray.length >= 2) {
    //console.log('there are 2 or more items in the array');
    let newButton = document.createElement('button');
    newButton.className = 'btn';
    newButton.innerHTML = "Pick Random host";
    newSpace.appendChild(newButton);

  }
}



