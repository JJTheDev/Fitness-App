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


      // ATTEMPT SAVE CARD TO TRY
      // $(".save-card").on("click", function(event){
      //   event.preventDefault();
      //   var tryArr = [];
      //   var recipeCard = $(this).parent().parent().parent();
      //   tryArr.push(recipeCard)
      //   console.log("card", recipeCard)
      //   console.log("arr", tryArr)
 

      //   localStorage.setItem("try", recipeCard.innerHTML);
      //   var storedTries = localStorage.getItem("try");
      // //   console.log("stored", storedTries)

      //   var savedSection = document.querySelector('.saved-try');

      // savedSection.innerHTML = storedTries;
      // })

      
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}

var tryArr = []


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
  tryArr.push(recipeObj)


  console.log("recipeObj", recipeObj)
  console.log("tryArr", tryArr)

}



// CLICK EVENT FOR TOGGLE CONTENT
var toggleContent = document.querySelectorAll(".toggle-content");

for (var i = 0; i < toggleContent.length; i++){
  toggleContent[i].addEventListener('click', function(){
    var displayContent = this.nextElementSibling;
    if (displayContent.style.display === "none"){
      displayContent.style.display = "block";
    } else {
      displayContent.style.display = "none";
    }
  })
}


// Event listener for search button click
$('#submit-button').click(function() {
  const searchInput = $('.search-bar input').val();
  searchRecipes(searchInput);
});