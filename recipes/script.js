var submitButton = document.getElementById('submit-button');

function getApi() {
  var requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=6ae8c73f&app_key=71480f0c50158929fad3cba79c8b94b4';

  fetch(requestUrl)
    .then(function (response)  {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    }
    )};
  
  submitButton.addEventListener('click', getApi);