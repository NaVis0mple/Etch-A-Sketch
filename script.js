//create div in html
let cdiv = document.querySelector('.container');
const box = document.querySelector('input');

box.addEventListener('input',(e)=>{
    console.log(e.target.value);
    cdiv.replaceChildren();
    for(i=0;i<Math.pow(e.target.value,2);i++){
        const div = document.createElement('div');
        div.style.cssText = `border: 1px solid black; height: 25px; width: 25px`;
        div.id = `${i+1}`;
        cdiv.appendChild(div);
        cdiv.style.gridTemplateColumns = `repeat(${e.target.value}, 25px)`; 
    }
    
    }
)



let button= document.getElementById('but1');
button.addEventListener('click',()=>{
    cdiv.replaceChildren();
    
})


cdiv.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    const gg = document.getElementById(`${e.target.id}`);
    if (e.buttons == 1 ){
        gg.style.background= 'black';
    }
});



 





