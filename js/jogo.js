
let altura = 0;
let largura = 0;

function gameScreen() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

gameScreen();

function randomPosition() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);


    let fly = document.createElement('img');
    fly.src = 'img/fly.png'
    fly.className = randomSize() + ' ' + randomSide();
    fly.style.left = posicaoX + 'px';
    fly.style.top = posicaoY + 'px';
    fly.style.position = 'absolute';

    document.body.appendChild(fly);

    console.log(randomSide());




 }


 function randomSize() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }

 }
    function randomSide() {
        let classe = Math.floor(Math.random() * 2);
    
        switch (classe) {
            case 0:
                return 'sideA'
            case 1:
                return 'sideB'
    
    
        }
}
 
    



