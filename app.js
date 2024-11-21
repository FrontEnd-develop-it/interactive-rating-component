const sectionContainer = document.querySelector('section');
const button = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (selectedRating) {
        sectionContainer.innerHTML = `
            <div class="thanks">
                <img src="./img/illustration-thank-you.svg" alt="thanks">
                <p class="info-about-rating">You selected ${selectedRating.value} out of 5</p>
                <h1>Thank you!</h1>
                <p class="thank">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        `;
    }
})