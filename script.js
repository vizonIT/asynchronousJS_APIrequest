'use strict';

const countryContainer = document.querySelector('.countries-cards');

// post/get/delete/put/use

// make a callback
const getCountriesData = function (country) {
  // telling js you want to make a request and the data should be the value of "request".
  const request = new XMLHttpRequest();


  // telling js the type of request we want to make "get" and the address to the server using api end point "https......."
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);


  // telling js to return the data or error to us
  request.send();


  // telling js to return a part as requested after getting access to the data
  request.addEventListener('load', function () {
    // console.log(this.responseText);

    //   converting the JSON format to object( we cant use object methods for JSON)
    //    const data = this.responseText;
    const [data] = JSON.parse(this.responseText);
    console.log(data);


    const html = `
     <div class="country-card">
         <img src="${data.flags.png}" alt="flag" class="flag">
  
         <div class="other-data">
         <div class="cname"><span>Country: </span>${data.name.common}</div>
         <div class="region"><span>Region: </span>${data.region}</div>
         <div class="population"><span>Population: </span>${(+data.population / 1000000).toFixed(1)}</div>
         <div class="language"><span>Language: </span>${Object.values(data.languages)[0]}</div>
         <div class="currency"><span>Currency: </span>${Object.values(data.currencies)[0].name}</div>
   </div> 
  </div>` ;
    countryContainer.insertAdjacentHTML('beforeend', html);
  })
};

getCountriesData('United Kingdom');