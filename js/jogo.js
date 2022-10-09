
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;

function gameScreen() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

gameScreen();

let cronometro = setInterval(function(){
    
    tempo -=1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        alert('vitoria');
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
   
    
    
},1000);

function randomPosition() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    let flyEx = document.getElementById('fly');
    let life = document.getElementById('v' + vidas);

    if(flyEx){
        flyEx.remove();
        if(vidas > 3){
            window.location.href = 'game_over.html';
        }else{
            life.src = "./img/emptyHeart.png"

             vidas ++;
        }

       
    }

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);


    let fly = document.createElement('img');
    fly.src = 'img/fly.png'
    fly.className = randomSize() + ' ' + randomSide();
    fly.style.left = posicaoX + 'px';
    fly.style.top = posicaoY + 'px';
    fly.style.position = 'absolute';
    fly.id = 'fly';
    fly.onclick = function(){
        this.remove();
    }

    document.body.appendChild(fly);

    




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
 
    



