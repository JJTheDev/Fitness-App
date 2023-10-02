let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', getInput);

function getInput(event) {
  event.preventDefault();
  console.log('click');
  let searchType = "cardio"; // You can set a default value here if needed
  let searchDifficulty = document.getElementById('search-format').value.trim();
  console.log(searchType);
  console.log(searchDifficulty);
  fetchExerciseSearchResults(searchType, searchDifficulty);
}

function fetchExerciseSearchResults(searchType, searchDifficulty) {
  let ExerciseURL = "https://api.api-ninjas.com/exercise?difficulty=" + searchDifficulty + "&type=" + searchType + "&fo=json";
  console.log(ExerciseURL);
  fetch(ExerciseURL, {
    headers: { authentication: 'Bearer sdfsdfsdfsdf' }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderSearchResults(data);
    });
}

 //render the results












// function renderSearchResults(data) {
//   console.log(data);
//   let searchResults = document.getElementById('search-results');


//   for (let i = 0; i < data.results.length; i++) {
//     let titleContent = `Title: ${data.results[i].title}`;
//     let dateContent = `Date: ${data.results[i].date}`;
//     let subjectContent = `Subject(s): ${data.results[i].subject}`;
//     let readMoreUrl = data.results[i].url;

//         //create elements
//         let titleEl = document.createElement("p");
//         let dateEl = document.createElement("p");
//         let subjectEl = document.createElement("p");
//         let readMoreEl = document.createElement("a");
//         let lineBreakEl = document.createElement("p");
    
//         //add content
//         titleEl.textContent = titleContent;
//         dateEl.textContent = dateContent;
//         subjectEl.textContent = subjectContent;
//         readMoreEl.textContent = "Read More";
//         readMoreEl.setAttribute('href', readMoreUrl);
//         readMoreEl.setAttribute('target', "_blank");
//         lineBreakEl.setAttribute('style', "border: 1px solid black");
    
//         //append to element
//         searchResults.append(titleEl);
//         titleEl.appendChild(dateEl);
//         titleEl.appendChild(subjectEl);
//         titleEl.appendChild(readMoreEl);
//         titleEl.appendChild(lineBreakEl);
//   }

// }