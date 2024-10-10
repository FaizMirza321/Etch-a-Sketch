const container = document.getElementById("container");

function createGrid(size){
    for(let row=0; row<size**2; row++){
        let cell = document.createElement("div");
        cell.style.width = "100% * " + (1/size) + "- 10 - 1";
        container.appendChild(cell);
    }
}
createGrid(16);
