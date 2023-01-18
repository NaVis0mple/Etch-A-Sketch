//create div in html
const cdiv = document.querySelector('.container');
for(i=1;i<257;i++){
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.id = `${i}`;
    cdiv.appendChild(div);
}

//hover
//cdiv.addEventListener('click',(e)=>console.log(e.target.id));


cdiv.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    const gg = document.getElementById(`${e.target.id}`);
    if (e.buttons == 1 ){
        gg.style.background= 'black';
    }
});



 





