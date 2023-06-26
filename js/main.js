const adicionar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const controle = document.querySelectorAll("[data-controle]");

controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        atualizarValor(evento.target.dataset.controle, evento.target.parentNode);
        atualizarEstatistica(evento.target.dataset.peca)
    });
})

function atualizarValor (operação, controle){
    const peca = controle.querySelector("[data-contador]");
    
    if (operação === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
};

function atualizarEstatistica (peca) {
    console.log(pecas[peca]);

    estatisticas.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
// ---------------------------- troca do robo
const imgRobo = [
    'img/Robotron 2000 - Amarelo.png', 
    'img/Robotron 2000 - Branco.png', 
    'img/Robotron 2000 - Preto.png', 
    'img/Robotron 2000 - Rosa.png', 
    'img/Robotron 2000 - Vermelho.png'
];

const botao = document.querySelectorAll('[data-botao]');
const robo = document.querySelector('.robo');
let valorAtual = 0;

botao.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        const parametro = (evento.target.textContent);
        mudarRobo(parametro);
    })
});

function mudarRobo (evento) {
    if (evento === ">") {
        valorAtual = (valorAtual + 1) % imgRobo.length;
        robo.src = imgRobo[valorAtual];
    } else {
        valorAtual = (valorAtual - 1 + imgRobo.length) % imgRobo.length;
        robo.src = imgRobo[valorAtual]
    }
};





