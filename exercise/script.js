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
  // console.log(selectedDifficulty);
});

typeDropdown.addEventListener('change', function() {
  selectedType = typeDropdown.value;
  // console.log(selectedType);
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
  // console.log(selectedDifficulty);
  var requestUrl = 'https://api.api-ninjas.com/v1/exercises?type=' + selectedType + '&difficulty=' + selectedDifficulty;
  // console.log(requestUrl);
  fetch(requestUrl, {
    method: 'GET',
    headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ'}
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < 3; i++) {
      // console.log(data[i].name);
      // console.log(data[i].equipment);
      // console.log(data[i].instructions);
      // console.log(data[i].difficulty);

      var workoutDiv = document.createElement('div');
      workoutDiv.className = "saved-workout-card"
      var exerciseName = document.createElement('h2');
      var exerciseEquipment = document.createElement('h3');
      var exerciseInstructions = document.createElement('p');
      var saveExercise = document.createElement('button');

      if (data.length === 0){
        workoutDiv.textContent = "No results found."
      }

      results.append(workoutDiv);
      workoutDiv.append(exerciseName);
      workoutDiv.append(exerciseEquipment);
      workoutDiv.append(exerciseInstructions);
      workoutDiv.append(saveExercise);
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
      saveExercise.addEventListener('click', (function (exerciseName, exerciseEquipment, exerciseInstructions) {
        return function () {
          var storedWorkouts = JSON.parse(localStorage.getItem("savedWorkout"));

          if (storedWorkouts !== null) {
            savedWorkout = storedWorkouts;
          }

          localStorage.setItem('savedWorkout', JSON.stringify(savedWorkout));
          showModalWithMessage(exerciseName + " has been saved to 'workouts to try'");

          var workoutObj = {
            "name": exerciseName,
            "equipment": exerciseEquipment,
            "instructions": exerciseInstructions,
          }

          var itemExists = savedWorkout.find(item => item.name === exerciseName);

          if(!itemExists){
            // Push exerciseName to the savedWorkout array
            savedWorkout.push(workoutObj);
            console.log(workoutObj)
            localStorage.setItem("savedWorkout", JSON.stringify(savedWorkout));
          } else if (itemExists){
          console.log("Item already Added:", itemExists)
          }

          var faveExercise = document.createElement('button');
          displaysavedWorkout()

          Saved.append(faveExercise);
          faveExercise.addEventListener('click', (function (listedWorkout) {
            return function () {
              bookmarkedWorkout = listedWorkout;
              // console.log(bookmarkedWorkout);
            };
          })(exerciseName, exerciseEquipment,exerciseInstructions)); // Pass the current value of 'exerciseName' to the closure
        };
      })(data[i].name, data[i].equipment, data[i].instructions)); // Pass the current value of 'i' to the closure
      

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
  var workoutsSaved = JSON.parse(localStorage.getItem('savedWorkout'));
  savedContainer.innerHTML = ''; // Clear the existing content

  for (var i = 0; i < workoutsSaved.length; i++) {
    var workoutDiv = document.createElement('div');
    workoutDiv.className = "saved-workout-card"
    var workoutTitle = document.createElement('h2');
    workoutTitle.textContent = workoutsSaved[i].name;
    var workoutEquipment = document.createElement('h3');
    workoutEquipment.textContent = "Equipment needed: " + workoutsSaved[i].equipment;
    var workoutInstructions = document.createElement('p');
    workoutInstructions.textContent = workoutsSaved[i].instructions;

    savedContainer.appendChild(workoutDiv);
    workoutDiv.appendChild(workoutTitle);
    workoutDiv.appendChild(workoutEquipment);
    workoutDiv.appendChild(workoutInstructions);
  }

}

// Load saved workout from local storage on page load
function init() {
  var storedsavedWorkout = JSON.parse(localStorage.getItem('savedWorkout'));
  if (storedsavedWorkout !== null) {
    savedWorkout = storedsavedWorkout;
    displaysavedWorkout(); // Display saved workout
  }
};

init();


// CLICK EVENT FOR TOGGLE CONTENT
var toggleContent = document.querySelector("#toTry")

toggleContent.addEventListener('click', function(){
  var displayContent = this.nextElementSibling;
  if (displayContent.style.display === "none") {
    displayContent.style.display = "block";
  } else {
    displayContent.style.display = "none";
  }
})