//elementos HTML
let idCharacter = document.getElementById("idCharacter");
//botones filtros
let buttonfilterall = document.getElementById("allfilter");
let buttonfilterwomen = document.getElementById("womenfilter");
let buttonfiltermen = document.getElementById("menfilter");
let buttonfiltergenderless = document.getElementById("genderlessfilter");
let buttonfilterunknown = document.getElementById("unknownfilter");
//botones para cambio de paginas
let buttonCurrentWebsite = document.getElementById("firstWebPage");
let buttonNextWebPage = document.getElementById("nextWebPage");
let buttonPreviousPageWeb = document.getElementById("previousPageWeb");
let buttonLastPageWeb = document.getElementById("lastPageWeb");

let character;
let currentWebsite = 1;

//Paginado
// function firstWebPage() {
//   currentWebsite(1);
//   currentWebsite = 1;
// }

function firstWebPage() {
  currentWebsite = 1;
  OrderWebsite(currentWebsite);
}

function nextWebPage() {
  currentWebsite++;
  orderWebPage(currentWebsite);
}

function previousPageWeb() {
  currentWebsite--;
  orderWebPage(currentWebsite);
}

function lastPageWeb() {
  currentWebsite(42);
  currentWebsite = 42;
}


buttonCurrentWebsite.addEventListener("click", firstWebPage);
buttonNextWebPage.addEventListener("click", nextWebPage);
buttonPreviousPageWeb.addEventListener("click", previousPageWeb);
buttonLastPageWeb.addEventListener("click", lastPageWeb);

//funcion para mostrar las penrsonales en html

function showMeOnHtml(arrCharacter) {
  idCharacter.innerHTML = "";
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
                                                                   </div>`;
  });
}

// solicitud de informacion a la api
function OrderWebsite(webSide) {
  fetch('https://rickandmortyapi.com/api/character/?page='+webSide )
    .then((information) => {
      return information.json();
    })
    .then((information) => {
      character = information.results;
      character.forEach((itemCharacter) => {
        showMeOnHtml(character);
        // console.log(itemCharacter.name)
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
                                <div><p class="verMas">VER MAS...</p></div>
                                </div>`;
      });
    });
}

OrderWebsite(webSide)

//funciones para los filtros

function womenfilter() {
  let women = character.filter((itemCharacter) => {
    return itemCharacter.gender === "Female";
  });
  showMeOnHtml(women);
}

function menfilter() {
  let men = character.filter((itemCharacter) => {
    return itemCharacter.gender === "Male";
  });
  showMeOnHtml(men);
}

function genderlessfilter() {
  let genderless = character.filter((itemCharacter) => {
    return itemCharacter.gender === "Genderless";
  });
  showMeOnHtml(genderless);
}

function unknownfilter() {
  let unknown = character.filter((itemCharacter) => {
    return itemCharacter.gender === "unknown";
  });
  showMeOnHtml(unknown);
}

function allfilter() {
  showMeOnHtml(character);
}

//creacion del evento boton

buttonfilterwomen.addEventListener("click", womenfilter);
buttonfiltermen.addEventListener("click", menfilter);
buttonfilterall.addEventListener("click", allfilter);
buttonfiltergenderless.addEventListener("click", genderlessfilter);
buttonfilterunknown.addEventListener("click", unknownfilter);
