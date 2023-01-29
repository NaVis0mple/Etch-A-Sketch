//using chatgpt
let gridContainer = document.getElementById("grid-container");
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mousedown', (e) => {
            e.preventDefault();   //this prevent drag 
            if (e.buttons === 1) {
                cell.style.backgroundColor = 'black';
            }
        });
        cell.addEventListener('mouseover',(e)=>{
        
            e.preventDefault();
            if(e.buttons  == 1){
                cell.style.backgroundColor = 'black';
           }
            
        }
        )
        row.appendChild(cell);
    }
    gridContainer.appendChild(row);
}


 





