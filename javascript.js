const container = document.getElementById("container");
containerWidth=container.offsetWidth;

function createGrid(num){   
    for(let i=0;i<num;i++){
        const col=document.createElement("col");
        for(let j=0;j<num;j++){
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.width=(containerWidth/num)+"px";
            square.style.borderStyle="solid";
            square.style.height=(containerWidth/num)+"px";
            square.style.backgroundColor="white";
            square.addEventListener('mouseenter',()=>{
                square.style.backgroundColor="green";
            })
            col.appendChild(square); 
        }
        container.appendChild(col);   
    }
}
createGrid(16);
