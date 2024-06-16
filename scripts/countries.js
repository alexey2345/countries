let countries = [];
let countriesFull = [];

const getDataAsync = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();

        // Assign unique IDs to countries
        countries = data.map((country, index) => ({
            ...country,
            id: `country_${index}` // Assigning a simple index-based ID
        }));

        countriesFull = [...countries];
    } catch (err) {
        console.log(err);
    }
}

const reset = () => {
    countries = [...countriesFull];
}

const search = (word) => {
    countries = countriesFull.filter((country) => {
        const name = country.name.common.toLowerCase();
        return name.includes(word.toLowerCase());
    });
}

export { getDataAsync, countries, search, reset };
