const elements = document.querySelectorAll(".element");

checkElement()
// when we scroll this fires a function checkElements
window.addEventListener("scroll",checkElement)

function checkElement(){
    var triggerBottom = (window.innerHeight / 5) * 4;

    elements.forEach( element => {
        var boxTop = element.getBoundingClientRect().top;
   
        if( boxTop < triggerBottom){
            element.classList.add("show")
        }
        else{
           element.classList.remove("show")
        }
       } )
}