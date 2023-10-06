var submitButton1 = document.getElementById('submit-button');
var typeDropdown = document.getElementById('type-format');
var difficultyDropdown = document.getElementById('diff-format');
var results = document.getElementById('results');
var selectedDifficulty = "";
var selectedType = "";

difficultyDropdown.addEventListener('change', function() {
  selectedDifficulty = difficultyDropdown.value;
  console.log(selectedDifficulty);
});

typeDropdown.addEventListener('change', function() {
  selectedType = typeDropdown.value;
  console.log(selectedType);
});

submitButton1.addEventListener('click', function (event) {
  event.preventDefault();
  clearResults();
  getApi1();
});

function clearResults() {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}

function getApi1(event) {
  console.log(selectedDifficulty);
  var requestUrl = 'https://api.api-ninjas.com/v1/exercises?type=' + selectedType + '&difficulty=' + selectedDifficulty;
  console.log(requestUrl);
  fetch(requestUrl, {
    method: 'GET',
    headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ'}
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < 3; i++) {
      console.log(data[i].name);
      console.log(data[i].equipment);
      console.log(data[i].instructions);
      console.log(data[i].difficulty);
      var exerciseName = document.createElement('h2');
      var exerciseEquipment = document.createElement('h3');
      var exerciseInstructions = document.createElement('p');
      var saveExercise = document.createElement('button');
      results.append(exerciseName);
      results.append(exerciseEquipment);
      results.append(exerciseInstructions);
      results.append(saveExercise);
      exerciseName.textContent = data[i].name;
      exerciseEquipment.textContent = "Equipment needed: " + data[i].equipment;
      exerciseInstructions.textContent = data[i].instructions;
      saveExercise.textContent = 'Save this';
      exerciseName.style.padding = '10px 20px';
      exerciseName.style.fontSize = '50px';
      exerciseEquipment.style.fontWeight = 'bold';
      
      // Apply styles using JavaScript
      saveExercise.style.backgroundColor = '#007bff'; // Blue background color
      saveExercise.style.color = '#fff'; // White text color
      saveExercise.style.padding = '10px 20px'; // Padding for spacing
      saveExercise.style.border = 'none'; // Remove the button border
      saveExercise.style.cursor = 'pointer'; // Show a pointer cursor on hover
      saveExercise.style.marginTop = '10px'; // Add some top margin to space out the button

      // Add a hover effect using JavaScript
      saveExercise.addEventListener('mouseover', function() {
        saveExercise.style.backgroundColor = '#0056b3'; // Darker blue on hover
      });

      // Add click event to show the modal
      saveExercise.addEventListener('click', function() {
        showModalWithMessage("Exercise saved!");
      });
    }
  });
}

function showModalWithMessage(message) {
  var modalContainer = document.getElementById('modal-container');
  var modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modalContainer.style.display = 'block';

  // Attach a click event to the close button to hide the modal
  var closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', function () {
    modalContainer.style.display = 'none';
  });
}

    // submitButton2.addEventListener('click', function (event) {
//   event.preventDefault();
//   let searchformat2 = document.getElementById('search-format2').value.trim();
//   getApi2(searchformat2);
// });

// submitButton3.addEventListener('click', function (event) {
//   event.preventDefault();
//   let searchformat3 = document.getElementById('search-format3').value.trim();
//   getApi3(searchformat3);
// });

// function getApi2(event) {
//   event.preventDefault();
//   var requestUrl = 'https://api.api-ninjas.com/v1/exercises?type=strength&difficulty=' + searchformat2;


//   fetch(requestUrl, {
//     method: 'GET',
//     headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ'}
//     }
//   )
//     .then(function (response)  {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     }
//     )};

//   function getApi3(event) {
//  event.preventDefault();
//     var requestUrl = 'https://api.api-ninjas.com/v1/exercises?type=stretching&difficulty=' + searchformat3;
  
  
//     fetch(requestUrl, {
//       method: 'GET',
//       headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ'}
//       }
//     )
//       .then(function (response)  {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       }
//       )};
  