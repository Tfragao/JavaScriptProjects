const MAX_COLOR_VALUE = 6; //hex color pattern #f15025, we have 6 hex value for the color

const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    for(let i = 0; i < MAX_COLOR_VALUE;i++){
        hexColor += hex[getRandomNumber()];
    }
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}