var submitButton = document.getElementById('submit-button');
var cardioResults = document.querySelector('#cardio-results')

function getApi(event) {
  event.preventDefault();
  var requestUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';

  fetch(requestUrl, {
    method: 'GET',
    headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ'}
    }
  )
    .then(function (response)  {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.forEach(workout => {

        var cardDiv = document.createElement("div");
        cardDiv.className = "workout-card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
        var cardH3 = document.createElement('h3');
        cardH3.className = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
        cardH3.innerHTML = `Name: ${workout.name}`;
        var cardH5 = document.createElement('h5');
        cardH5.className = "mb-2 tracking-tight text-gray-900 dark:text-white";
        cardH5.innerHTML = `Equipment: ${workout.equipment} <br/> Muscle: ${workout.muscle}`;
        var cardInstructions = document.createElement('p');
        cardInstructions.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
        cardInstructions.innerHTML = `${workout.instructions}`;
        var saveBtn = document.createElement('button');
        saveBtn.className = "nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
        saveBtn.innerHTML = "Save";
      
      
        console.log(cardioResults)
        cardioResults.appendChild(cardDiv);
        cardDiv.appendChild(cardH3);
        cardDiv.appendChild(cardH5);
        cardDiv.appendChild(cardInstructions);
        cardDiv.appendChild(saveBtn);
      })
      
    }
    )};

 // getApi()
// function functiontest(event) {
//   event.preventDefault();
//   console.log('click');
//   getApi();
// }


  submitButton.addEventListener('click', getApi);


// CLICK EVENT FOR TOGGLE CONTENT
var toggleContent = document.querySelectorAll(".toggle-content");

for (var i = 0; i < toggleContent.length; i++){
  toggleContent[i].addEventListener('click', function(){
    var displayContent = this.nextElementSibling;
    console.log(">>", displayContent)
    if (displayContent.style.display === "none"){
      displayContent.style.display = "block";
    } else {
      displayContent.style.display = "none";
    }
  })
}



// STARTER CODE option 2 FOR WORKOUT CARD option 1? (both the same, JQUERY VS JAVASCRIPT)
  // data.forEach(workout => {

  //   const card = $(
  //     ` <div class="recipe-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //         <div class="p-5">
  //            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${workout.name}</h3>
  //            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Equipment: ${workout.equipment} Muscle: ${workout.muscle}</h5>
  //           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${workout.instructions}</p>
  //           <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick="saveWorkout('')">
  //             Save</button>
  //             </div>
  //       </div>`
  //       );
  // });




// let submitButton = document.getElementById('submit-button');
// submitButton.addEventListener('click', getInput);

// function getInput(event) {
//   event.preventDefault();
//   console.log('click');
//   let searchType = "cardio"; // You can set a default value here if needed
//   let searchDifficulty = document.getElementById('search-format').value.trim();
//   console.log(searchType);
//   console.log(searchDifficulty);
//   fetchExerciseSearchResults(searchType, searchDifficulty);
// }

// function fetchExerciseSearchResults(searchType, searchDifficulty) {
//   let ExerciseURL = "https://www.api-ninjas.com/v1/exercises?difficulty=" + searchDifficulty;
//   // + "&type=" + searchType + "&fo=json"
//   console.log(ExerciseURL);
//   fetch(ExerciseURL, {
//     headers: { 'X-Api-Key': 'rLckepqsgeop/WsCGuoxfA==2FCPCg34ZbuFcqmQ' }
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderSearchResults(data);
//     });
// }

//  //render the results












// // function renderSearchResults(data) {
// //   console.log(data);
// //   let searchResults = document.getElementById('search-results');


// //   for (let i = 0; i < data.results.length; i++) {
// //     let titleContent = `Title: ${data.results[i].title}`;
// //     let dateContent = `Date: ${data.results[i].date}`;
// //     let subjectContent = `Subject(s): ${data.results[i].subject}`;
// //     let readMoreUrl = data.results[i].url;

// //         //create elements
// //         let titleEl = document.createElement("p");
// //         let dateEl = document.createElement("p");
// //         let subjectEl = document.createElement("p");
// //         let readMoreEl = document.createElement("a");
// //         let lineBreakEl = document.createElement("p");
    
// //         //add content
// //         titleEl.textContent = titleContent;
// //         dateEl.textContent = dateContent;
// //         subjectEl.textContent = subjectContent;
// //         readMoreEl.textContent = "Read More";
// //         readMoreEl.setAttribute('href', readMoreUrl);
// //         readMoreEl.setAttribute('target', "_blank");
// //         lineBreakEl.setAttribute('style', "border: 1px solid black");
    
// //         //append to element
// //         searchResults.append(titleEl);
// //         titleEl.appendChild(dateEl);
// //         titleEl.appendChild(subjectEl);
// //         titleEl.appendChild(readMoreEl);
// //         titleEl.appendChild(lineBreakEl);
// //   }

// // }