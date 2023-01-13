//create div in html
const cdiv = document.querySelector('.container');
for(i=1;i<257;i++){
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    cdiv.appendChild(div);
}
