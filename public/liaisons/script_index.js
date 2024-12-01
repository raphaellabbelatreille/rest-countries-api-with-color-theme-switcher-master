
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
    
function getPays(name){
    
    const url = `https://restcountries.com/v3.1`+name;
     
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const listeRecettes = document.getElementById('liste_flag');
            console.log(data)

            data.forEach(hit => {
               
                nouveauLi = document.createElement("li")

                    aLayer = document.createElement("a");
                    //"cca2":"GS","ccn3":"239","cca3":"SGS"
                    aLayer.href = "fiche.html?code="+hit.cca2;

                        //<img id="flag_img" class="flag_img" src="______">
                        nouveauImg = document.createElement("img")
                        nouveauImg.src = hit.flags.png;
                        aLayer.appendChild(nouveauImg)
                        //<h2 class="flag_titre" id="flag_titre">_____</h2>
                        nouveauH3 = document.createElement("h3")
                        nouveauH3.innerText = hit.name.common;
                        aLayer.appendChild(nouveauH3)
                        //<p><b>Population</b><span id="flag_population">_____</span></p>
                        nouveauPPop = document.createElement("p")
                        nouveauPPop.innerHTML = "<strong>Population: </strong>"+hit.population;
                        aLayer.appendChild(nouveauPPop)
                        //<p><b>Region</b><span id="flag_region">_____</span></p>
                        nouveauPReg = document.createElement("p")
                        nouveauPReg.innerHTML = "<strong>Region: </strong>"+hit.region;
                        aLayer.appendChild(nouveauPReg)
                        //<p><b>Capital</b><span id="flag_capital">_____</span></p>*/
                        nouveauPCap = document.createElement("p")
                        nouveauPCap.innerHTML = "<strong>Region: </strong>"+hit.capital;

                    aLayer.appendChild(nouveauPCap)

                nouveauLi.appendChild(aLayer)
                
                listeRecettes.appendChild(nouveauLi)
            });
        })
        .catch(error => console.error('Erreur:', error));
};
getPays("/all");