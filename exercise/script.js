var submitButton1 = document.getElementById('submit-button1');
var submitButton2 = document.getElementById('submit-button2');
var submitButton3 = document.getElementById('submit-button3');
let searchformat1 = document.getElementById('search-format1').value;
var searchformat2 = document.getElementById('search-format2');
var searchformat3 = document.getElementById('search-format3');
//console.log(submitButton1)

function getApi1(event) {
  event.preventDefault();
  var requestUrl = 'https://api.api-ninjas.com/v1/exercises?type=cardio&difficulty=' + searchformat1;

  console.log(requestUrl);
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
    }
    )};


  submitButton1.addEventListener('click', getApi1);



function getApi2(event) {
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
    }
    )};


  submitButton2.addEventListener('click', getApi2);

  function getApi3(event) {
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
      }
      )};
  
  
    submitButton3.addEventListener('click', getApi3);


























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

// TOGGLE DISPLAY FUNCTIONS
function toggleCompleted() {
    var content = document.querySelector(".saved-completed");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleTry() {
    var content = document.querySelector(".saved-try");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleCardio() {
    var content = document.querySelector("#cardio-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleStrength() {
    var content = document.querySelector("#strength-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleStretching() {
    var content = document.querySelector("#stretching-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
