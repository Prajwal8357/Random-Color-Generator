const mainButton = document.querySelector("button");
const body = document.body;

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256 );
    const green = Math.floor(Math.random() * 256 );
    const  blue = Math.floor(Math.random() * 256 );
    const randomColor = `rgb(${red}, ${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", function (){
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    document.querySelector("span").innerText= randomColor ;
    
});