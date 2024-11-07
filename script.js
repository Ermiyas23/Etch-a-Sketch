const start = document.querySelector('#click-me');
start.addEventListener('click',user)

function user(userNum){
    const Enter = prompt('any number less than 100 for fun', 1);
    userNum = parseInt(Enter);
    return userNum ;
    
}
let showNum =user();
if(showNum >= 1 && showNum <= 100){
    newGrid(showNum);

}else{
    old();

}
function old(){
    const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for(let i = 0; i <16 ; i++){
    for(let j = 0; j < 16 ; j++){
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }
}

const hover = document.querySelectorAll('.item');
hover.forEach(item=> {
    item.addEventListener('mouseover',()=>{
        item.style.backgroundColor = 'Gray';
    })
   
});

}

function newGrid(showNum){
    const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for(let i = 0; i <showNum ; i++){
    for(let j = 0; j < showNum ; j++){
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }
}

const hover = document.querySelectorAll('.item');
hover.forEach(item=> {
    item.addEventListener('mouseover',()=>{
        item.style.backgroundColor = 'Gray';
    })
   
});

}



