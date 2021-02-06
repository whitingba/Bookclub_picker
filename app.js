



var nameArray = [];

function submitName() {
  let name1 = document.getElementById('FirstName').value;
  //console.log(name1);


  nameArray.push(name1);
  addNames();
}

function addNames() {

  //grab an id in the HTML and create a variable for a span
  let newSpace = document.getElementById('desert');
  let newSpan = document.createElement('span');

  //loop through the names give and insert them in to the HTML on their own line
  nameArray.forEach(function (eachName) {
    newSpan.innerHTML = eachName + "</br>";
  })
  newSpace.appendChild(newSpan);

}



