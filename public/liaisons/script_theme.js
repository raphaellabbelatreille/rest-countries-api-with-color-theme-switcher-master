document.getElementById("changeSetting").addEventListener("click", changeThemeColor.bind(this))
function changeThemeColor(){
    
    let currentColor = localStorage.getItem("color");
    let newColor = "";
    switch(currentColor){
        case "dark": newColor = "light" ; break;
        case "light": newColor = "dark" ; break;
    }
    console.log(currentColor+" change color to " + newColor)
    let everythingThatCanChangeColor =document.querySelectorAll(".canChangeColor")
    for(index=0;index<everythingThatCanChangeColor.length;index++){
        everythingThatCanChangeColor[index].classList.remove("dark")
        everythingThatCanChangeColor[index].classList.remove("light")
        everythingThatCanChangeColor[index].classList.add(newColor)
    }
    document.getElementById("changeSetting").innerText= newColor.substring(0,1).toUpperCase() + newColor.substring(1).toLowerCase()+" Mode"
    localStorage.setItem("color", newColor)
    
}

changeThemeColor()
changeThemeColor()
