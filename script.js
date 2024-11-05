const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for(let i = 0; i <16 ; i++){
    for(let j = 0; j < 16 ; j++){
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);

        const hover = document.querySelector('.item');
hover.addEventListener('mouseover',()=>{
    hover.style.backgroundColor = 'yellow';
})

    }
}

