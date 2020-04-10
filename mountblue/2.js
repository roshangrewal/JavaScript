var studentArray = [{
  "name": "Abhishek Ranjan",
  "room": "4.18",
  "track": "JavaScript"
  },
  {
  "name": "Rohit Patel",
  "room": "4.18",
  "track": "JavaScript"
  },
  {
  "name": "Abhishek Kumar Pandey",
  "room": "4.18",
  "track": "JavaScript"
  },
  {
  "name": "Arkaprava Mandal",
  "room": "4.18",
  "track": "JavaScript"
  },
  {
  "name": "Saurabh",
  "room": "4.18",
  "track": "JavaScript"
  },
  {
  "name": "Shivam Singh",
  "room": "4.8",
  "track": "Java"
  },
  {
  "name": "Utkarsh Agnihotri",
  "room": "4.8",
  "track": "Java"
  }]
// console.log(studentArray);

var nameOfAll = [];
studentArray.forEach(function(input){ nameOfAll.push(input.name);})
console.log(nameOfAll);

// var roomNumber = [];
// studentArray.forEach(function(input){ roomNumber.push(input.room);})
// console.log(roomNumber);

// var trackCategory = [];
// studentArray.forEach(function(input){ trackCategory.push(input.track);})
// console.log(trackCategory);

// var new_array = [];
// studentArray.map(function callback(currentValue) { new_array.push(currentValue)
//     // Return element for new_array


// console.log(nameOfAll);

// Create an array of all the student names in the class
// Create a array of all the student objects in JavaScript track
// Find the count of all students in Java or JavaScript class