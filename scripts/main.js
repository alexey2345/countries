import { getDataAsync, countries } from './countries.js';
import { createAllCards } from './dom.js';

const initializeApp = async () => {
    await getDataAsync(); // Ensure data is fetched before proceeding
    createAllCards(); // Create cards once data is loaded

    // Initialize local storage for each heart icon if not already set
    countries.forEach(country => {
        const localStorageKey = `like_${country.id}`;

        if (!localStorage.getItem(localStorageKey)) {
            localStorage.setItem(localStorageKey, 'gray'); // Default to gray if no preference set
        }
    });
};

initializeApp();
