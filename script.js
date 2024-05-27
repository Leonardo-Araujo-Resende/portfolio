// Botoes menu
const paginaHome = document.querySelector('#pagina-home');
const paginaSobreMim = document.querySelector('#pagina-sobre-mim');
const paginaHabilidades = document.querySelector('#pagina-habilidades');
const paginaProjetos = document.querySelector('#pagina-projetos');

//Divs
const divHome = document.querySelector('#home');
const divSobreMim = document.querySelector('#sobre-mim');
const divHabilidades = document.querySelector('#habilidades');
const divProjetos = document.querySelector('#projetos');

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

