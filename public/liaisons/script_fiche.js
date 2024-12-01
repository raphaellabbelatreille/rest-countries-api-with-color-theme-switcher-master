
document.getElementById('barre_recherche').addEventListener('blur', function(e) {
    e.preventDefault();
    const countryName = "/all";
    console.log(e.value)
    if (e.value != null){
        countryName ="/name/"+ e.value;
    } else {
    }
    getPays(countryName)
}
)
    
function getPays(){
    let fullUrl = window.location.search;
    let params = new URLSearchParams(fullUrl);
    let code= params.get("code")
    console.log(code)
    //"cca2":"GS","ccn3":"239","cca3":"SGS"
    const url = `https://restcountries.com/v3.1/alpha?codes=`+code;
    
     
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let thing=data[0]
            document.getElementById("img").src = thing.flags.png;
            document.getElementById("nom").innerText= thing.name.common;
            document.getElementById("Native_Name").innerText= thing.name.nativeName.eng.official;
            document.getElementById("Population").innerText= thing.population;
            document.getElementById("Region").innerText= thing.region;
            document.getElementById("Sub_Region").innerText= thing.subregion;
            document.getElementById("Capital").innerText= thing.capital;
            document.getElementById("Top_Level_Domain").innerText= thing.tld;
            
            document.getElementById("Currencies").innerText= thing.currencies.EUR.name;
            let add = ""
            console.log(thing["languages"])
            for (let index=0; index<thing["languages"];index++){
                console.log(thing.languages[index])
                add += thing.languages[index];
            }
            //document.getElementById("Languages").innerText= thing.languages.eng;

        })
        .catch(error => console.error('Erreur:', error));
};
getPays();