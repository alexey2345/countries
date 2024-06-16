import { countries } from './countries.js';

const cards = document.getElementById('cards');

const like = () => {
    const elements = document.querySelectorAll('.like-button');
    elements.forEach(element => {
        const countryId = element.dataset.countryId;
        const localStorageKey = `like_${countryId}`;

        // Retrieve stored preference from local storage
        const storedColor = localStorage.getItem(localStorageKey);

        // Set initial color based on stored preference or default to gray
        if (storedColor === 'red') {
            element.classList.add('text-danger');
        } else {
            element.classList.add('text-secondary');
        }

        // Add click event listener to toggle color and update local storage
        element.addEventListener('click', () => {
            element.classList.toggle('text-secondary');
            element.classList.toggle('text-danger');

            // Update local storage with current color preference
            const currentColor = element.classList.contains('text-danger') ? 'red' : 'gray';
            localStorage.setItem(localStorageKey, currentColor);
        });
    });
};

const createCard = (country) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow rounded m-2 col-md-3 col-sm-10';

    const cardImg = document.createElement('img');
    cardImg.src = country.flags.png;
    cardImg.className = 'card-img-top img border shadow rounded mt-2';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `Capital: ${country.capital}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa fa-heart like-button';
    heartIcon.setAttribute('data-country-id', country.id); // Use unique country ID

    cardFooter.appendChild(heartIcon);
    cardDiv.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardFooter);

    cards.appendChild(cardDiv);
};

const createAllCards = () => {
    cards.innerHTML = ''; // Clear existing cards
    countries.forEach((country) => {
        createCard(country);
    });
    like(); // Initialize like buttons after creating cards
};

export { createAllCards, like };
