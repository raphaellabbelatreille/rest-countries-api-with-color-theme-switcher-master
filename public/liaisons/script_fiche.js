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
            
            //document.getElementById("Currencies").innerText= thing.currencies.EUR.name;
            let add = ""
            console.log(thing["languages"]);
            arrayVerifi = ["eng", "fra", "gsw", "ita","roh","hun","zho","ara","ind","por"];
            for (let index=0; index<arrayVerifi.length;index++){
                if (thing["languages"][arrayVerifi[index]]!= null){
                    add += thing.languages[arrayVerifi[index]] + ", ";
                }
                
            }
            document.getElementById("Languages").innerText= add;

        })
        //.catch(error => console.error('Erreur:', error));
};
getPays();