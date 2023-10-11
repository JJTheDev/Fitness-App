document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const apiUrl = 'https://api.api-ninjas.com/v1/bucketlist';
    const apiKey = '0FgMf1TTFfyRhv+gsDu5qA==0A2dfLlQ2Xkp8hYF';

    // Elements
    const favoritesToggle = document.querySelector('.completed-workouts .toggle-content');
    const savedCompleted = document.querySelector('.completed-workouts .saved-completed');
    const tryToggle = document.querySelector('.try .toggle-content');
    const savedTry = document.querySelector('.try .saved-try');
    const cardioToggle = document.querySelector('#cardio .toggle-content');
    const cardioForm = document.querySelector('#cardio form');
    const cardioResults = document.querySelector('#cardio-results');
    const strengthToggle = document.querySelector('#strength .toggle-content');
    const strengthResults = document.querySelector('#strength-results');
    const stretchingToggle = document.querySelector('#stretching .toggle-content');
    const stretchingResults = document.querySelector('#stretching-results');

    // Event Listeners
    favoritesToggle.addEventListener('click', function() {
        savedCompleted.style.display = savedCompleted.style.display === 'none' ? 'block' : 'none';
    });

    tryToggle.addEventListener('click', function() {
        savedTry.style.display = savedTry.style.display === 'none' ? 'block' : 'none';
    });

    cardioToggle.addEventListener('click', function() {
        cardioForm.style.display = cardioForm.style.display === 'none' ? 'block' : 'none';
    });

    cardioForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const difficulty = document.getElementById('search-format').value;
        fetchAndDisplayExercises('cardio', difficulty);
    });

    strengthToggle.addEventListener('click', function() {
        strengthResults.style.display = strengthResults.style.display === 'none' ? 'block' : 'none';
        fetchAndDisplayExercises('strength');
    });

    stretchingToggle.addEventListener('click', function() {
        stretchingResults.style.display = stretchingResults.style.display === 'none' ? 'block' : 'none';
        fetchAndDisplayExercises('stretching');
    });

    // Function to Fetch and Display Exercises
    const fetchAndDisplayExercises = async (muscle, difficulty) => {
        try {
            const response = await axios.get(apiUrl, {
                headers: { 'X-Api-Key': apiKey },
                params: { muscle, difficulty },
            });
            // Handle the response and update the DOM accordingly
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching exercises:', error.message);
        }
    };
});

  

// // script.js

// // Function to fetch and display exercises for a specific muscle
// async function fetchAndDisplayExercises(muscle) {
//     try {
//         const response = await axios.get(`https://api.api-ninjas.com/v1/exercises`);
//         const exercises = response.data;

//         const resultsContainer = document.getElementById(`${muscle}-results`);
//         resultsContainer.innerHTML = ''; // Clear previous results

//         exercises.forEach((exercise) => {
//             const exerciseCard = createExerciseCard(exercise);
//             resultsContainer.appendChild(exerciseCard);
//         });

//         resultsContainer.style.display = 'block'; // Show results container
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to create an exercise card
// function createExerciseCard(exercise) {
//     const exerciseCard = document.createElement('div');
//     exerciseCard.classList.add('workout-card', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700');

//     const title = document.createElement('h3');
//     title.classList.add('mb-2', 'text-2xl', 'font-bold', 'tracking-tight', 'text-gray-900', 'dark:text-white');
//     title.textContent = `Name: ${exercise.name}`;

//     const details = document.createElement('h5');
//     details.classList.add('mb-2', 'tracking-tight', 'text-gray-900', 'dark:text-white');
//     details.innerHTML = `Equipment: ${exercise.equipment} <br> Muscle: ${exercise.muscle}`;

//     const description = document.createElement('p');
//     description.classList.add('mb-3', 'font-normal', 'text-gray-700', 'dark:text-gray-400');
//     description.textContent = exercise.description;

//     const favoriteButton = document.createElement('button');
//     favoriteButton.classList.add('favoriteBtn', 'inline-flex', 'items-center', 'px-3', 'py-2', 'text-sm', 'font-medium', 'text-center', 'text-white', 'bg-blue-700', 'rounded-lg', 'hover:bg-blue-800', 'focus:ring-4', 'focus:outline-none', 'focus:ring-blue-300', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'dark:focus:ring-blue-800');
//     favoriteButton.innerHTML = '&#9829;';

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('removeBtn', 'inline-flex', 'items-center', 'px-3', 'py-2', 'text-sm', 'font-medium', 'text-center', 'text-white', 'bg-blue-700', 'rounded-lg', 'hover:bg-blue-800', 'focus:ring-4', 'focus:outline-none', 'focus:ring-blue-300', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'dark:focus:ring-blue-800');
//     removeButton.textContent = 'delete';

//     // Add event listener for the remove button
//     removeButton.addEventListener('click', () => {
//         exerciseCard.remove();
//         // You can add logic here to remove the exercise from local storage if needed
//     });

//     // Append elements to exercise card
//     exerciseCard.appendChild(title);
//     exerciseCard.appendChild(details);
//     exerciseCard.appendChild(description);
//     exerciseCard.appendChild(favoriteButton);
//     exerciseCard.appendChild(removeButton);

//     return exerciseCard;
// }

// // Event listeners for different exercise categories
// document.getElementById('cardio').addEventListener('click', () => {
//     const difficulty = document.getElementById('search-format').value;
//     fetchAndDisplayExercises('cardio', difficulty);
// });

// document.getElementById('strength').addEventListener('click', () => {
//     fetchAndDisplayExercises('strength');
// });

// document.getElementById('stretching').addEventListener('click', () => {
//     fetchAndDisplayExercises('stretching');
// });

// // Event listener for form submission
// document.getElementById('submit-button').addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     const difficulty = document.getElementById('search-format').value;
//     fetchAndDisplayExercises('cardio', difficulty);
// });

