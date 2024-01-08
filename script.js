

let character;
let currentWebSite = 1;
let spanidTotalCharacter = document.getElementById("totalCharacter");

//funcion para mostrar los personajes en html

function showMeOnHtml(arrCharacter) {
  let numberCharacter = arrCharacter.length;
  spanidTotalCharacter.innerText = numberCharacter

  idCharacter.innerHTML = " ";
  console.log(arrCharacter)
  arrCharacter.forEach((itemCharacter) => {
    idCharacter.innerHTML += `<div class="idCharacter">
                                  <div class="boxOne">
                                      <div>
                                        <img class="imagin" src=${itemCharacter.image}>
                                      </div>
                                        <div class="figure">
                                          <p>Nombre: ${itemCharacter.name}</p>
                                          <p>Genero: ${itemCharacter.gender}</p>
                                          <p>Species: ${itemCharacter.species}</p>
                                          <p>Status: ${itemCharacter.status}</p>
                                          <p>Origin: ${itemCharacter.origin.name}</p>
                                          <p>Location ${itemCharacter.location.name}</p>
                                        </div>  
                                      
                                  </div>
                              </div>`;
  });
}

//Opcion de ver mas, opcional

                                 {/* <div class="viewPlus">
                                        <p class="verMas">VER MAS...</p>
                                      </div> */}


//elementos HTML

let idCharacter = document.getElementById("idCharacter");

// solicitud de informacion a la api
function askWebSite (webSide) {
    fetch('https://rickandmortyapi.com/api/character/?page='+webSide)
        .then((information) => {
          return information.json();
        })
        .then((information) => {
          totalCharacter = information.results;
          // OrderWebsite(totalCharacter);
          showMeOnHtml(totalCharacter);
        })
};

askWebSite(currentWebSite);

//botones filtros de genero
let buttonfilterall = document.getElementById("allfilter");
let buttonfilterwomen = document.getElementById("womenfilter");
let buttonfiltermen = document.getElementById("menfilter");
let buttonfiltergenderless = document.getElementById("genderlessfilter");
let buttonfilterunknown = document.getElementById("unknownfilter");

//creacion del evento boton filtros de genero

buttonfilterwomen.addEventListener("click", womenfilter);
buttonfiltermen.addEventListener("click", menfilter);
buttonfilterall.addEventListener("click", allfilter);
buttonfiltergenderless.addEventListener("click", genderlessfilter);
buttonfilterunknown.addEventListener("click", unknownfilter);

//funciones para los filtros de genero

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
let buttonPreviousPageWeb = document.getElementById("previousPageWeb");
let buttonNextWebPage = document.getElementById("nextWebPage");
let buttonLastPageWeb = document.getElementById("lastPageWeb");

buttonCurrentWebsite.addEventListener("click", firstWebPage);
buttonPreviousPageWeb.addEventListener("click", previousPageWeb);
buttonNextWebPage.addEventListener("click", nextWebPage);
buttonLastPageWeb.addEventListener("click", lastPageWeb);


function firstWebPage() {
  currentWebSite = 1;
  askWebSite(1);
  automaticPageCut(currentWebSite);
  // console.log(currentWebSite);
}

function nextWebPage() {
  currentWebSite++;
  askWebSite(currentWebSite);
  automaticPageCut(currentWebSite);
  // console.log(currentWebSite);
}

function previousPageWeb() {
  currentWebSite--;
  askWebSite(currentWebSite);
  automaticPageCut(currentWebSite);
  // console.log(currentWebSite);
}

function lastPageWeb() {
  currentWebSite = 42;
  askWebSite(42);
  automaticPageCut(currentWebSite);
  // console.log(currentWebSite);
}

//funcion para evitar seguir cuando alcazamos el valor min o max de la webpage

function automaticPageCut(webSide) {
  buttonPreviousPageWeb.disabled = currentWebSite === 1;
  buttonCurrentWebsite.disabled = currentWebSite === 1;
  buttonNextWebPage.disabled = currentWebSite === 42;
  buttonLastPageWeb.disabled = currentWebSite === 42;
}














//formula para saber que cantidad de persones hay por pagina

// let totalPersonajes = document.getElementById("totalCharacter");

// totalPersonajes = (totalCharacter/currentWebSite);
// console.log(totalPersonajes)


//formula para saber en que pagina estoy

// let currentPagePath = window.location.pathname;

// let paginasConocidas = [
//   '/pagina1',
//   '/pagina2',
//   '/pagina3',
//   '/pagina4',
//   '/pagina5',
//   '/pagina6',
//   '/pagina7',
//   '/pagina8',
//   '/pagina9',
//   '/pagina10',
//   '/pagina11',
//   '/pagina12',
//   '/pagina13',
//   '/pagina14',
//   '/pagina15',
//   '/pagina16',
//   '/pagina17',
//   '/pagina18',
//   '/pagina19',
//   '/pagina20',
//   '/pagina21',
//   // ...
// ];

// for (let i = 0; i < paginasConocidas.length; i++) {
//   if (currentPagePath === paginasConocidas[i]) {
//     // console.log('Estás en la página:', i + 1);
//     document.getElementById("#actualPage").textContent += currentPagePath;
//     break;
//   }
// }

//fomula para saber la cantidad de paginas

// let totalPage = currentWebSite;

// document.getElementById("totalPage").textContent ="Total de páginas: " + currentWebSite;
// totalPage.innerHTML = currentWebSite.lenght
