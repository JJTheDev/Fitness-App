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
        const ingredients = recipe.recipe.ingredients

      ingredients.forEach(item => {
        console.log(">>", item.text)

      })

        const card = $(
          ` <div class="recipe-card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" style="width: 100%" src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
              <div class="p-5">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${recipe.recipe.label}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${recipe.recipe.ingredients.text}</p>
                <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick="saveRecipe('${recipe.recipe.uri}')">
                  Save</button>
              </div>
            </div>`
            );

        $('.search-results').append(card);
      });
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}

// Function to save a recipe
function saveRecipe(uri) {
  // TODO: Implement this function to save the recipe to the user's favorites or to try
  // You can use the recipe URI as a unique identifier for the recipe
}

// Toggle display of favorites section
function toggleFavorites() {
  $('.saved-favorites').toggle();
}

// Toggle display of try section
function toggleTry() {
  $('.saved-try').toggle();
}

// Event listener for search button click
$('#submit-button').click(function() {
  const searchInput = $('.search-bar input').val();
  searchRecipes(searchInput);
});


        //   `<div class="card">
        //   <div class="card-title">${recipe.recipe.label}</div>
        //   <div class="card-content">
        //     <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        //     <p>${recipe.recipe.summary}</p>
        //   </div>
        //   <button onClick="saveRecipe('${recipe.recipe.uri}')">Save</button>
        // </div>`