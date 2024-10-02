const submitBtn = document.querySelector('.submit');
const ratingContainer = document.querySelector('.rating-container');
const feedbackContainer = document.querySelector('.feedback-container');
const selected = document.querySelector('#selected');
const ratingForm = document.querySelector('#rating-form');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedRating = ratingForm.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        selected.textContent = selectedRating.value;
    }
    ratingContainer.style.display = 'none';
    feedbackContainer.style.display = 'flex';
});
