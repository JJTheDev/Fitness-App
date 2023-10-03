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
        const card = $(`<div class="card">
          <div class="card-title">${recipe.recipe.label}</div>
          <div class="card-content">
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <p>${recipe.recipe.summary}</p>
          </div>
          <button onClick="saveRecipe('${recipe.recipe.uri}')">Save</button>
        </div>`);

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
