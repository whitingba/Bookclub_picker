



var nameArray = [];

function submitName() {
  let name1 = document.getElementById('FirstName').value;
  console.log(name1);


  nameArray.push(name1);
  addNames();
}

function addNames() {


  let newSpace = document.getElementById('desert');
  let newSpan = document.createElement('span');
  newSpan.innerHTML = nameArray[0];

  newSpace.appendChild(newSpan);

  console.log(nameArray);

}



