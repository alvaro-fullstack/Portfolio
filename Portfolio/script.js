let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList ='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList ='responsive';
        menuVisible = true;
    }

}

function seleccionar(){
    //oculto el menu una vez selecciono
    document.getElementById('nav').classList = '';
    menuVisible = false;
}

//Funcion de aplicar las animaciones
function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('angular');
        habilidades[2].classList.add('html5css3');
        habilidades[3].classList.add('python');
        habilidades[4].classList.add('nodejsexpress');
        habilidades[5].classList.add('comunicacion');
        habilidades[6].classList.add('trabajo');
        habilidades[7].classList.add('creatividad');
        habilidades[8].classList.add('dedicacion');
        habilidades[9].classList.add('proyect');
    }
}

//detecto el scrolling
window.onscroll = function(){
    efectoHabilidades();
}