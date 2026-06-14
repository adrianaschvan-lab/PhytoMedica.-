```javascript
/* =========================
   PHYTOMEDICA - SCRIPT.JS
========================= */

/* ========= MODO ESCURO ========= */

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }

});

/* ========= CONTADORES ========= */

function animarContador(id, valorFinal){

    let valor = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        valor++;

        elemento.textContent = valor;

        if(valor >= valorFinal){
            clearInterval(intervalo);
        }

    }, 25);

}

animarContador("contador1", 120);
animarContador("contador2", 85);
animarContador("contador3", 250);

/* ========= PESQUISA ========= */

function pesquisar(){

    let texto =
    document.getElementById("busca")
    .value
    .toLowerCase()
    .trim();

    let resposta = "";

    if(texto.includes("dor de cabeça")){

        resposta =
        "🌿 Algumas pessoas utilizam tradicionalmente camomila e hortelã em infusões. Procure orientação profissional se os sintomas persistirem.";

    }

    else if(texto.includes("sono")){

        resposta =
        "😴 Camomila e erva-cidreira são frequentemente usadas em chás relaxantes antes de dormir.";

    }

    else if(texto.includes("ansiedade")){

        resposta =
        "💚 Chás de camomila e melissa são tradicionalmente associados ao relaxamento.";

    }

    else if(texto.includes("gripe")){

        resposta =
        "🍋 Algumas pessoas utilizam infusões quentes com gengibre e limão durante períodos de resfriado.";

    }

    else if(texto.includes("tosse")){

        resposta =
        "🌱 O eucalipto é uma planta bastante conhecida e tradicionalmente utilizada em vapores e infusões.";

    }

    else if(texto.includes("hortelã")){

        resposta =
        "🌿 Hortelã: planta aromática muito popular pelo aroma refrescante.";

    }

    else if(texto.includes("camomila")){

        resposta =
        "🌼 Camomila: uma das ervas mais conhecidas para infusões relaxantes.";

    }

    else if(texto.includes("alecrim")){

        resposta =
        "🌿 Alecrim: erva aromática muito utilizada na culinária e em jardins.";

    }

    else{

        resposta =
        "🔎 Nenhum resultado encontrado. Tente pesquisar por: dor de cabeça, sono, ansiedade, gripe, tosse, hortelã, camomila ou alecrim.";

    }

    document.getElementById("resultadoPesquisa").innerHTML = resposta;

}

/* ========= QUIZ ========= */

function corrigirQuiz(){

    let pontos = 0;

    const respostas =
    document.querySelectorAll(
    "input[type='radio']:checked"
    );

    respostas.forEach(item => {

        pontos += Number(item.value);

    });

    let nivel = "";

    if(pontos === 4){

        nivel = "🏆 Mestre das Ervas";

    }

    else if(pontos >= 3){

        nivel = "🌿 Especialista em Plantas";

    }

    else if(pontos >= 2){

        nivel = "🍃 Aprendiz de Botânica";

    }

    else{

        nivel = "🌱 Iniciante";

    }

    document.getElementById("pontuacao")
    .innerHTML =
    `
    <strong>Pontuação:</strong> ${pontos}/4 <br>
    <strong>Nível:</strong> ${nivel}
    `;

}

/* ========= CURIOSIDADES ========= */

const curiosidades = [

"🌿 Existem milhares de espécies de plantas utilizadas tradicionalmente em diversas culturas.",

"🌱 A camomila é uma das ervas mais conhecidas do mundo.",

"🍃 O alecrim é cultivado há séculos em diferentes regiões.",

"🌼 A lavanda é famosa por seu perfume agradável.",

"🌿 A hortelã possui diversas variedades diferentes.",

"🌱 Muitas ervas aromáticas também são usadas na culinária.",

"🍋 O gengibre é uma raiz muito popular em bebidas e receitas.",

"🌳 O eucalipto pode atingir grandes alturas dependendo da espécie.",

"🌼 A natureza abriga uma enorme diversidade de plantas medicinais.",

"🌿 O estudo das plantas é chamado de Botânica."

];

function novaCuriosidade(){

    const numero =
    Math.floor(
    Math.random() *
    curiosidades.length
    );

    document.getElementById(
    "curiosidadeTexto"
    ).innerHTML =
    curiosidades[numero];

}

/* ========= CURIOSIDADE AUTOMÁTICA ========= */

setInterval(() => {

    const numero =
    Math.floor(
    Math.random() *
    curiosidades.length
    );

    document.getElementById(
    "curiosidadeTexto"
    ).innerHTML =
    curiosidades[numero];

}, 8000);
```
