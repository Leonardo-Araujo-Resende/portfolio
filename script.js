// Botoes menu
const paginaHome = document.querySelector('#pagina-home');
const paginaSobreMim = document.querySelector('#pagina-sobre-mim');
const paginaHabilidades = document.querySelector('#pagina-habilidades');
const paginaProjetos = document.querySelector('#pagina-projetos');

//Botoes projeto
const botaoAbreFacelita = document.querySelector("#botao-facelita");
const botaoFechaFacelita = document.querySelector("#x");

//Divs
const divHome = document.querySelector('#home');
const divSobreMim = document.querySelector('#sobre-mim');
const divHabilidades = document.querySelector('#habilidades');
const divProjetos = document.querySelector('#projetos');

//Popup
const popupsDiv = document.querySelector("#popups");
const popupFacelita = document.querySelector(".popup-facelita");

paginaHome.addEventListener("click", function(){
    divHome.scrollIntoView({ behavior: 'smooth' });
})

paginaSobreMim.addEventListener("click", function(){
  divSobreMim.scrollIntoView({ behavior: 'smooth' });
})

paginaHabilidades.addEventListener("click", function(){
  divHabilidades.scrollIntoView({ behavior: 'smooth' });
})

paginaProjetos.addEventListener("click", function(){
  divProjetos.scrollIntoView({ behavior: 'smooth' });
})



const titulo = document.querySelector('#quem-sou');

var isDigitando = true;
setInterval(() => {
  if(isDigitando){
    titulo.textContent = "Olá! Sou Leonardo" + "|";
    isDigitando = false;
  }else{
    titulo.textContent = "Olá! Sou Leonardo";
    isDigitando = true;
  }

}, 600); 


function ativarPopup(){
  popupsDiv.classList.remove("escondido");
}

function desativarPopup(){
  popupsDiv.classList.add("escondido");
}

function ativarFaceLita(){
  ativarPopup();
  popupFacelita.classList.remove("escondido");
}

function desativarFaceLita(){
  desativarPopup();
  popupFacelita.classList.add("escondido");
}

botaoAbreFacelita.addEventListener("click",function(){
  ativarFaceLita();
})

botaoFechaFacelita.addEventListener("click",function(){
  desativarFaceLita();
})