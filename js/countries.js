const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();


const displayCountries = (conutries) =>{
    const countriesDiv = document.getElementById('country');
    conutries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML=`
            <h3>${country.continents}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryDetail('${country.capital}')">Details</button>
        `;
        /* const h3 = document.createElement('h3');
        h3.innerText = country.continents;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText= country.capital;
        div.appendChild(p); */
        countriesDiv.appendChild(div);
        
    });

   
}
const loadCountryDetail = (capital) => {

    const url = `https://restcountries.com/v3.1/capital/${capital}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0])); 

}

const displayCountryDetail = (country) =>{
    const countryDiv = document.getElementById('country-detial');
    countryDiv.innerHTML=`
        <h5>${country.continents}</h5>
        <p>Population : ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `;
}