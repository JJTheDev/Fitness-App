var submitButton = document.getElementById('submit-button');

function getApi(event) {
  event.preventDefault();
  var requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=e118288e&app_key=736419bcc92b747f21b8db7b5c8fa362&diet=balanced&diet=high-fiber&health=celery-free&health=egg-free';
  fetch(requestUrl, {
    method: 'GET',
    mode: 'no-cors'
  }
  )
    .then(function (response)  {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    }
    )};
 // getApi()
// function functiontest(event) {
//   event.preventDefault();
//   console.log('click');
//   getApi();
// }

  submitButton.addEventListener('click', getApi);