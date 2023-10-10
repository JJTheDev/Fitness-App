var submitButton1 = document.getElementById('submit-button');
var typeDropdown = document.getElementById('type-format');
var difficultyDropdown = document.getElementById('diff-format');
var results = document.getElementById('results');
var savedContainer = document.getElementById('saved');
var selectedDifficulty = "";
var selectedType = "";
var savedWorkout = [];
var favoriteWorkout = "";
var bookmarkedWorkout = "";

difficultyDropdown.addEventListener('change', function() {
  selectedDifficulty = difficultyDropdown.value;
  console.log(selectedDifficulty);
});

typeDropdown.addEventListener('change', function() {
  selectedType = typeDropdown.value;
  console.log(selectedType);
});

document.addEventListener('click', function (event) {
  if (event.target.matches('#submit-button')) {
    event.preventDefault();
    clearResults();
    getApi1();
  }
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
      saveExercise.textContent = 'Try this';
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

      // Add click event to show the modal and save the exercise
      saveExercise.addEventListener('click', (function (exerciseName) {
        return function () {
          savedWorkout.push(exerciseName); // Push exerciseName to the savedWorkout array
          localStorage.setItem('savedWorkout', JSON.stringify(savedWorkout));
          console.log(savedWorkout);
          showModalWithMessage(exerciseName + " saved under 'workout to try'");
          var listedWorkout = document.createElement('li');
          var faveExercise = document.createElement('button');
          Saved.append(listedWorkout);
          Saved.append(faveExercise);
          listedWorkout.textContent = exerciseName; // Use exerciseName here
          faveExercise.addEventListener('click', (function (listedWorkout) {
            return function () {
              bookmarkedWorkout = listedWorkout;
              console.log(bookmarkedWorkout);
            };
          })(exerciseName)); // Pass the current value of 'exerciseName' to the closure
        };
      })(data[i].name)); // Pass the current value of 'i' to the closure
      

    }
  });
}
function showModalWithMessage(message) {
  var modalContainer = document.getElementById('modal-container');
  var modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modalContainer.style.display = 'flex';

  // Attach a click event to the close button to hide the modal
  var closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', function () {
    modalContainer.style.display = 'none';
  });
}

function displaysavedWorkout() {
  var savedContainer = document.getElementById('Saved');
  savedContainer.innerHTML = ''; // Clear the existing content

  for (var i = 0; i < savedWorkout.length; i++) {
    var workout = savedWorkout[i];
    var listedWorkout = document.createElement('li');
    listedWorkout.textContent = workout;
    savedContainer.appendChild(listedWorkout);
  }

}

// Load saved workout from local storage on page load
(function init() {
  var storedsavedWorkout = JSON.parse(localStorage.getItem('savedWorkout'));
  if (storedsavedWorkout !== null) {
    savedWorkout = storedsavedWorkout;
    displaysavedWorkout(); // Display saved workout
  }
})();

init();


// // Add click event to handle workout completion

//     // Create an object to represent the exercise data
//     var exerciseData = {
//       name: data[index].name,
//       equipment: data[index].equipment,
//       instructions: data[index].instructions,
//     };

//     // Convert the exercise data to a JSON string and store it in local storage
//     localStorage.setItem('savedExercise', JSON.stringify(exerciseData));

//     var exerciseNameSaved = document.createElement('h2');
//     var completedExercise = document.createElement('button');
//     savedContainer.append(exerciseNameSaved);
//     savedContainer.append(completedExercise);
//     exerciseNameSaved.textContent = data[index].name;
//     completedExercise.textContent = "Workout Completed?";
//     completedExercise.addEventListener('click', function () {
//       // Retrieve the saved exercise data from local storage
//       var savedExerciseData = localStorage.getItem('savedExercise');
    
//       if (savedExerciseData) {
//         // Parse the JSON string back to an object
//         var exerciseData = JSON.parse(savedExerciseData);
    
//         // Now you can use exerciseData.name, exerciseData.equipment, and exerciseData.instructions
//         // to display or process the saved exercise data as needed.
//       } else {
//         // Handle the case where no exercise data is found in local storage
//         console.log("No saved exercise data found.");
//       }
//     });
