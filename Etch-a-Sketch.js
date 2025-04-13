const container = document.createElement("div");
container.classList.add("container");
container.setAttribute("style","width: 100%;height: 100%;display: flex;gap: 50px;background-color: rgb(18, 18, 70)");
document.body.appendChild(container);

//button for reset
const button = document.createElement("button");
button.textContent = "reset";
button.setAttribute("style","width: 100px;height: 30px;font-size: 24px;border: none;border-radius: 10px;background-color: rgb(29, 188, 209);align-self: center;margin-left: 50px");
container.appendChild(button);

//game squares
const divContainer = document.createElement("div");
divContainer.classList.add("container");
divContainer.setAttribute("style","width: 70%;height: 100%;display: grid;grid-template-columns: repeat(16,50px);gap: 20px;margin: auto;justify-content: center;align-items: center");
container.appendChild(divContainer);
for (i = 0 ; i < 256; i ++)
{
    let rows = document.createElement("div");
    rows.setAttribute("style","background-color: rgb(51, 51, 156);width: 40px;height: 40px;");
    rows.classList.add("square");
    rows.addEventListener("mouseover",function(){
        rows.style.backgroundColor = "rgb(201, 91, 91)";
    });
    divContainer.appendChild(rows);
}   
//button for resetting the game
button.addEventListener("click", function() {
    const squares = document.querySelectorAll(".square"); 
    squares.forEach(function(square) {
        square.style.backgroundColor = "rgb(51, 51, 156)"; 
    });
});