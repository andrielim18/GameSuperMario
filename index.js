const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
//const pontos = document.querySelector('pontos');
const textStart = document.getElementById('text-start');
const pontos = document.querySelector(".Pontos");


/*Função Start*/
function start(jump) {
  pipe.classList.add('pipe-animation');
  mario.src = './imagens/super-mario.gif';
  mario.style.width = '150px';

};



/*Função Pulo*/
function jump() {
  textStart.style.display="none";
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
}

/*Função Contagem de Pontos*/ 
const contarPontos = pontos;
let score = 0;

const contador = setInterval((()=>{
  score ++;
  contarPontos.innerHTML =`Pontos: ${score}`;
  
}

),500);




/*Verficar se bateu*/

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    

    textStart.style.display="inline-block";
    textStart.style.backgroundColor="red";
    textStart.style.fontSize="50px";
    document.getElementById("text-start").innerHTML = "GAME OVER";
    
    clearInterval(contador);
    clearInterval(loopGame);

  }

}, 20);


document.addEventListener('keydown', start);
document.addEventListener("keydown", jump);