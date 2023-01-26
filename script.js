//create div in html
let cdiv = document.querySelector('.container');
const box = document.querySelector('input');



for(i=1;i<257;i++){
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.id = `${i}`;
    cdiv.appendChild(div);
}

box.addEventListener('input',(e)=>{
    console.log(e.target.value);
    cdiv.replaceChildren();
    for(i=1;i<e.target.value;i++){
        const div = document.createElement('div');
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        div.id = `${i}`;
        cdiv.appendChild(div);
    }
    
    }
)




cdiv.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    const gg = document.getElementById(`${e.target.id}`);
    if (e.buttons == 1 ){
        gg.style.background= 'black';
    }
});



 





