const personagem = {
    parado: document.getElementById('parados'),
    erro: document.getElementById('errou'),
    soco1: document.getElementById('soco1'),
    soco2: document.getElementById('soco2'),
    soco3: document.getElementById('soco3'),
    chute1: document.getElementById('chute1'),
    chute2: document.getElementById('chute2'),
    chute3: document.getElementById('chute3'),
    desvio: document.getElementById('desvia'),
};

const hit = document.getElementById('apanhando');
const punch = document.getElementById('socando');
const kick = document.getElementById('chutando');

hit.volume = 0.1; 
punch.volume = 0.1; 
kick.volume = 0.2; 


let x = 550; // Coordenada X desejada
let y = -200; // Coordenada Y desejada
let animationTimeout; // Variável para controlar o temporizador

function definirPosicao(x, y) {
    for (const key in personagem) {
        if (personagem.hasOwnProperty(key)) {
            personagem[key].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
}

function ocultarTodasAsImagens() {
    for (const key in personagem) {
        if (personagem.hasOwnProperty(key)) {
            personagem[key].style.display = 'none';
        }
    }
}

document.addEventListener('keydown', function (event) {
    // Cancela qualquer temporizador existente
    if (animationTimeout) {
        clearTimeout(animationTimeout);
    }

    ocultarTodasAsImagens();

    switch (event.key) {
        //notas graves
        case 'q':
            personagem.soco1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'w':
            personagem.chute1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'e':
            personagem.desvio.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'r':
            personagem.soco2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 't':
            personagem.chute2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'y':
            personagem.soco3.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'u':
            personagem.chute3.style.display = 'block';
            definirPosicao(x, y);
        break;

        //notas medias
        case 'a':
            personagem.soco1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 's':
            personagem.chute1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'd':
            personagem.desvio.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'f':
            personagem.soco2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'g':
            personagem.chute2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'h':
            personagem.soco3.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'j':
            personagem.chute3.style.display = 'block';
            definirPosicao(x, y);
        break;

    //notas agudas
        case 'z':
            personagem.soco1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'x':
            personagem.chute1.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'c':
            personagem.desvio.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'v':
            personagem.soco2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'b':
            personagem.chute2.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'n':
            personagem.soco3.style.display = 'block';
            definirPosicao(x, y);
        break;
        case 'm':
            personagem.chute3.style.display = 'block';
            definirPosicao(x, y);
        break;
    
    }

    // Define um temporizador para mudar para a animação "parado" após 3 segundos (3000 milissegundos)
    animationTimeout = setTimeout(function () {
        ocultarTodasAsImagens();
        personagem.parado.style.display = 'block';
        definirPosicao(x, y);
    }, 800); 
});

const teclas = ['Do3', 'Re3', 'Mi3', 'Fa3', 'Sol3', 'La3', 'Si3', 'CDb3', 'DEb3', 'FGb3', 'GAb3', 'ABb3',
'Do4', 'Re4', 'Mi4', 'Fa4', 'Sol4', 'La4', 'Si4', 'CDb4', 'DEb4', 'FGb4', 'GAb4', 'ABb4',
'Do5', 'Re5', 'Mi5', 'Fa5', 'Sol5', 'La5', 'Si5', 'CDb5', 'DEb5', 'FGb5', 'GAb5', 'ABb5'];

const audioElementos = {};
const teclaElementos = {};

// Preenche os objetos de áudio e tecla
teclas.forEach(nota => {
  audioElementos[nota] = document.getElementById(`nota${nota}`);
  teclaElementos[nota] = document.getElementById(`tecla${nota}`);
});


// Função para tocar a nota
function tocarNota(nota) {
  audioElementos[nota].currentTime = 0;
  audioElementos[nota].play();
}

// Adiciona ouvintes de clique para cada tecla
teclas.forEach(nota => {
  teclaElementos[nota].addEventListener('click', () => {
    tocarNota(nota);
  });
});

// Adiciona ouvintes de teclado para todas as teclas desejadas
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    //notas graves
    case 'q':
      tocarNota('Do3');
      punch.play();
      break;
    case 'w':
      tocarNota('Re3');
      kick.play();
      break;
    case 'e':
      tocarNota('Mi3');
      break;
    case 'r':
      tocarNota('Fa3');
      punch.play();
      break;
    case 't':
      tocarNota('Sol3');
      kick.play();
      break;
    case 'y':
      tocarNota('La3');
      punch.play();
      break;
    case 'u':
      tocarNota('Si3');
      kick.play();
      break;

    //notas medias
    case 'a':
      tocarNota('Do4');
      punch.play()
      break;
    case 's':
      tocarNota('Re4');
      kick.play();
      break;
    case 'd':
      tocarNota('Mi4');
      break;
    case 'f':
      tocarNota('Fa4');
      punch.play();
      break;
    case 'g':
      tocarNota('Sol4');
      kick.play();
      break;
    case 'h':
      tocarNota('La4');
      punch.play();
      break;
    case 'j':
      tocarNota('Si4');
      kick.play();
      break;

  //notas agudas
    case 'z':
      tocarNota('Do5');
      punch.play();
      break;
    case 'x':
      tocarNota('Re5');
      kick.play();
      break;
    case 'c':
      tocarNota('Mi5');
      break;
    case 'v':
      tocarNota('Fa5');
      punch.play();
      break;
    case 'b':
      tocarNota('Sol5');
      kick.play();
      break;
    case 'b':
      tocarNota('La5');
      punch.play();
      break;
    case 'n':
      tocarNota('Si5');
      kick.play();
      break;
    
  }
});

teclas.forEach(nota => {
  if (animationTimeout) {
    clearTimeout(animationTimeout);
  }

  ocultarTodasAsImagens();

  teclaElementos[nota].addEventListener('click', () => {
    if (nota === 'Do3' || nota === 'Do4' || nota === 'Do5') {
      punch.play();
        personagem.parado.style.display = 'none';
        personagem.soco1.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.soco1.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'Re3' || nota === 'Re4' || nota === 'Re5') {
      kick.play();
        personagem.parado.style.display = 'none';
        personagem.chute1.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.chute1.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'Mi3' || nota === 'Mi4' || nota === 'Mi5') {
        personagem.parado.style.display = 'none';
        personagem.desvio.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.desvio.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'Fa3' || nota === 'Fa4' || nota === 'Fa5') {
      punch.play();
        personagem.parado.style.display = 'none';
        personagem.soco2.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.soco2.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'Sol3' || nota === 'Sol4' || nota === 'Sol5') {
      kick.play();
        personagem.parado.style.display = 'none';
        personagem.chute2.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.chute2.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'La3' || nota === 'La4' || nota === 'La5') {
      punch.play();
        personagem.parado.style.display = 'none';
        personagem.soco3.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.soco3.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'Si3' || nota === 'Si4' || nota === 'Si5') {
      kick.play();
        personagem.parado.style.display = 'none';
        personagem.chute3.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.chute3.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'CDb3' || nota === 'CDb4' || nota === 'CDb5') {
      hit.play();
        personagem.parado.style.display = 'none';
        personagem.erro.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.erro.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'DEb3' || nota === 'DEb4' || nota === 'DEb5') {
      punch.play();
        personagem.parado.style.display = 'none';
        personagem.soco1.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.soco1.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'FGb3' || nota === 'FGb4' || nota === 'FGb5') {
      hit.play();
        personagem.parado.style.display = 'none';
        personagem.erro.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.erro.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'GAb3' || nota === 'GAb4' || nota === 'GAb5') {
      punch.play();
        personagem.parado.style.display = 'none';
        personagem.soco2.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.soco2.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
    else if (nota === 'ABb3' || nota === 'ABb4' || nota === 'ABb5') {
        personagem.parado.style.display = 'none';
        personagem.desvio.style.display = 'block'; 
        definirPosicao(x, y);
        setTimeout(() => {
            personagem.desvio.style.display = 'none';
            personagem.parado.style.display = 'block';
        }, 800); 
    }
  });
});

// Ocultar todas as imagens no início e definir a posição inicial
ocultarTodasAsImagens();
personagem.parado.style.display = 'block';
definirPosicao(x, y);