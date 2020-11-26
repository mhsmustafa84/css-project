const header = document.getElementById("header");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let i = 1;
function slide(){
    if(i === 1){
        i++;
        header.style.backgroundImage = `url(img/Header/Header${i}.jpg)`;
    } else {
        i = 1;
        header.style.backgroundImage = `url(img/Header/Header${i}.jpg)`;
    }
}
next.addEventListener("click",slide);
prev.addEventListener("click",slide);