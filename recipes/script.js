// Updated Edamam API credentials
const applicationId = '168c1e74';
const apiKey = '252f0cab761765dc3b9d527495b7d90a';

// Function to search for recipes
function searchRecipes(query) {
  // Clear previous search results
  $('.search-results').empty();

  // Make a request to the Edamam API
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${applicationId}&app_key=${apiKey}`)
    .then(response => {
      const recipes = response.data.hits;
      // Display each recipe in a card
      recipes.forEach(recipe => {

        const card = $(
          ` <div class="recipe-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" style="width: 100%" src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
              <div class="p-5">

              <div style="height: 150px">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${recipe.recipe.label}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${recipe.recipe.cuisineType}, ${recipe.recipe.dietLabels}</p>
                </div>

                <div>
                <a href="${recipe.recipe.url}" target="_blank"><button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See How To Cook</button></a>
                <button class="save-card inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick="saveRecipe('${recipe.recipe.image}', '${recipe.recipe.label}', '${recipe.recipe.cuisineType}', '${recipe.recipe.dietLabels}', '${recipe.recipe.url}')">Save</button>
                </div>
              </div>
            </div>`
        );
        // 


        $('.search-results').append(card);
      });

    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}


var tryArr = [];
// Function to save a recipe
function saveRecipe(image, label, cuisineType, dietLabels, url) {
  // TODO: Implement this function to save the recipe to the user's favorites or to try
  // You can use the recipe URI as a unique identifier for the recipe

  var recipeObj = {
    "image": image,
    "label": label,
    "type": cuisineType,
    "dietLabels": dietLabels,
    "recipeUrl": url,
  }

  if (!localStorage.getItem('try')) {
    tryArr.push(recipeObj);
    localStorage.setItem("try", JSON.stringify(tryArr));
  } else {
    tryArr.push(recipeObj);
    localStorage.setItem("try", JSON.stringify(tryArr));
  }

  console.log("localStorage", localStorage)

  displaySavedTry();
}

function displaySavedTry() {
  var savedTries = JSON.parse(localStorage.getItem('try'));
  // var displaySavedTries = document.querySelector(".saved-try");

  // displaySavedTries.innerHTML = " ";


  if (savedTries < 1) {
    console.log("empty")

  } else {
    for (var i = 0; i < savedTries.length; i++) {
      
      const card = $(
        ` <div class="recipe-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg" style="width: 100%" src="${savedTries[i].image}" alt="${savedTries[i].label}" />
              <div class="p-5">
            
                  <div style="height: 150px">
                       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${savedTries[i].label}</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${savedTries[i].type},${savedTries[i].dietLabels}</p>
                  </div>
            
                  <div>
                      <a href="${savedTries[i].recipeUrl}" target="_blank"><button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      See How To Cook</button></a>
                       <button class="save-card inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick="favorteRecipe()">&#9829;</button>
                  </div>
                </div>
            </div>`
      );

       $('.saved-try').append(card);

    }
  }
};



// CLICK EVENT FOR TOGGLE CONTENT
var toggleContent = document.querySelectorAll(".toggle-content");

for (var i = 0; i < toggleContent.length; i++) {
  toggleContent[i].addEventListener('click', function () {
    var displayContent = this.nextElementSibling;
    if (displayContent.style.display === "none") {
      displayContent.style.display = "block";
    } else {
      displayContent.style.display = "none";
    }
  })
}


// Event listener for search button click
$('#submit-button').click(function () {
  const searchInput = $('.search-bar input').val();
  searchRecipes(searchInput);
});


displaySavedTry();