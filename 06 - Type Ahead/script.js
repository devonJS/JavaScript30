const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

fetch(endpoint)
  .then(stream => stream.json())
  .then(data => cities.push(...data));

function findCityMatches(wordToMatch, cities) {
    return cities.filter(area => {
        const regex = new RegExp(wordToMatch, 'gi');
        return area.city.match(regex) || area.state.match(regex);
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchedArray = findCityMatches(this.value, cities);
        
    suggestions.innerHTML = matchedArray.map(cityMatch => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = cityMatch.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = cityMatch.state.replace(regex, `<span class="hl">${this.value}</span>`);
      
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(cityMatch.population)}</span>
            </li>
          `;
    }).join('');
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

