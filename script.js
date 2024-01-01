

let character;
let currentWebSite = 1;

//funcion para mostrar los personajes en html

function showMeOnHtml(arrCharacter) {
  idCharacter.innerHTML = " ";
  arrCharacter.forEach((itemCharacter) => {
    idCharacter.innerHTML += `<div class="idCharacter">
                                      <div>
                                        <img src=${itemCharacter.image}>
                                      </div>
                                    <p>Nombre: ${itemCharacter.name}</p>
                                    <p>Genero: ${itemCharacter.gender}</p>
                                    <p>Species: ${itemCharacter.species}</p>
                                    <p>Status: ${itemCharacter.status}</p>
                                    <p>Origin: ${itemCharacter.origin}</p>
                                    <p>Location ${itemCharacter.location}</p>
                                      <div>
                                        <p class="verMas">VER MAS...</p>
                                      </div>
                              </div>`;
  });
}

//elementos HTML

let idCharacter = document.getElementById("idCharacter");

// solicitud de informacion a la api
function askWebSite (webSide) {
    fetch('https://rickandmortyapi.com/api/character/?page='+webSide)
        .then((information) => {
          return information.json();
        }).then((information) => {
          totalCharacter = information.results;
          OrderWebsite(totalCharacter);
        })
};

askWebSite(currentWebSite);

//botones filtros
let buttonfilterall = document.getElementById("allfilter");
let buttonfilterwomen = document.getElementById("womenfilter");
let buttonfiltermen = document.getElementById("menfilter");
let buttonfiltergenderless = document.getElementById("genderlessfilter");
let buttonfilterunknown = document.getElementById("unknownfilter");

//creacion del evento boton

buttonfilterwomen.addEventListener("click", womenfilter);
buttonfiltermen.addEventListener("click", menfilter);
buttonfilterall.addEventListener("click", allfilter);
buttonfiltergenderless.addEventListener("click", genderlessfilter);
buttonfilterunknown.addEventListener("click", unknownfilter);

//funciones para los filtros

function womenfilter() {
  let women = totalCharacter.filter((itemCharacter) => {
    return itemCharacter.gender === "Female";
  });
  showMeOnHtml(women);
}

function menfilter() {
  let men = totalCharacter.filter((itemCharacter) => {
    return itemCharacter.gender === "Male";
  });
  showMeOnHtml(men);
}

function genderlessfilter() {
  let genderless = totalCharacter.filter((itemCharacter) => {
    return itemCharacter.gender === "Genderless";
  });
  showMeOnHtml(genderless);
}

function unknownfilter() {
  let unknown = totalCharacter.filter((itemCharacter) => {
    return itemCharacter.gender === "unknown";
  });
  showMeOnHtml(unknown);
}

function allfilter() {
  showMeOnHtml(totalCharacter);
}
//Paginado

//botones para cambio de paginas
let buttonCurrentWebsite = document.getElementById("firstWebPage");
let buttonNextWebPage = document.getElementById("nextWebPage");
let buttonPreviousPageWeb = document.getElementById("previousPageWeb");
let buttonLastPageWeb = document.getElementById("lastPageWeb");

buttonCurrentWebsite.addEventListener("click", firstWebPage);
buttonNextWebPage.addEventListener("click", nextWebPage);
buttonPreviousPageWeb.addEventListener("click", previousPageWeb);
buttonLastPageWeb.addEventListener("click", lastPageWeb);




function firstWebPage() {
  currentWebSite = 1;
  askWebSite(1);
  automaticPageCut(currentWebSite);

  // if(currentWebSite===1){
  //   buttonPreviousPageWeb.disabled=true
  //   buttonCurrentWebsite.disabled=true
  // } else {
  //   buttonNextWebPage.disabled=false
  //   buttonLastPageWeb.disabled=false
  // }
  // currentWebSite(1);
  console.log(currentWebSite);
}

function nextWebPage() {
  currentWebSite++;
  askWebSite(currentWebSite);
  automaticPageCut(currentWebSite);

  // if(currentWebSite===42){
  //   buttonNextWebPage.disabled=true
  //   buttonLastPageWeb.disabled=true
  // } else {
  //   buttonPreviousPageWeb.disabled=false
  //   buttonCurrentWebsite.disabled=false
  // }
  
  // orderWebPage(currentWebSite);
  console.log(currentWebSite);
}

function previousPageWeb() {
  currentWebSite--;
  askWebSite(currentWebSite);
  automaticPageCut(currentWebSite);

  // orderWebPage(currentWebSite);
  console.log(currentWebSite);
}

function lastPageWeb() {
  currentWebSite = 42;
  askWebSite(42);
  automaticPageCut(currentWebSite);

  console.log(currentWebSite);
}


function automaticPageCut(webSide) {
  buttonPreviousPageWeb.disabled = currentWebSite === 1;
  buttonCurrentWebsite.disabled = currentWebSite === 1;
  buttonNextWebPage.disabled = currentWebSite === 42;
  buttonLastPageWeb.disabled = currentWebSite === 42;
}


