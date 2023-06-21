let btn= document.getElementById('Submit-btn');
const inputCountry=document.getElementById('country-name');
const resultCont=document.getElementById('result');




btn.addEventListener("click",()=>{
    console.log("im clicked ");
    let countryName=inputCountry.value;
    console.log(countryName);
    let finalUrl=`https://restcountries.com/v3.1/name/${countryName}`;
    fetch(finalUrl)
        .then((response)=>{
        return response.json();
    }).then((data)=>{
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(data[0].timezones[0]);
        // console.log(data[0].population);
        // console.log(data[0].currencies.INR.name);
        // console.log(data[0].area);
        // console.log(data[0].maps.googleMaps);
        resultCont.innerHTML=`

        
        <img src=${data[0].flags.svg} class="flag-image" >
        
        <h2>${data[0].name.common}</h2>
       
        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>continents:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>

        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>

        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>timezone:</h4>
        <span>${data[0].timezones[0]}</span>
        </div>
        </div>
        
        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>population:</h4>
        <span>${data[0].population}</span>
        </div>
        </div>

         
        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>currencies:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
        </div>
        </div>

        
        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>total area :</h4>
        <span>${data[0].area}</span>
        </div>
        </div>

       
        <div id="wrapper"> 
        <div id="data-wrapper">
        <h4>map link:</h4>
        <span>${data[0].maps.googleMaps} </span>
        </div>
        </div>


        `
         
        ;
        
    });

  
});


