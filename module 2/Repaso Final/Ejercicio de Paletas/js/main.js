"use strict";
/* PRIMEROS PASOS
1: obtener datos de la paleta del servidor(json) : FETCH
2: Adaptar esos datos al js. 
3: pintar la patela, pues se indica cómo hacerlo en los datos

SEGUNDOS PASOS 
1: hacer las paletas como nos lo piden
2: pintar el resto

ÚLTIMOS PASOS
1: marcarlas como favoritas ( si son selccionadas por la user)
2: genenar un filtro para que se puedan seleccionar por nombre
3: guardar esos datos en el LocalStorage
*/

/* P.P. 1 esta variable se declara con un array vacío porque luego se meten los colores de palette en la respuesta de los datos del servidor, se meten en un aray que aquí esta declarado, si no se declarase daría error, y dentro del fetch, tambien, sería indefinido.*/

let palettes = [];
// este array es para añadir la lista de favoritos
favoritesLis = [];

/* metemos el fecth en una función para invocarla cuando y donde queramos*/

function getData() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json"
  )
    .then(function (response) {
      // con return ya están aquí los datos
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      palettes = data.palettes;
      console.log(data.palettes);
    /* aquí podemos acceder a un tipo de datos concretos, por ejemplo a la paleta dond están los colores, asi ue ponemos data.palette para accder a ellos pero antes guardar esa instruccion en una variable, esto entre las llaves de la function data.*/
      
      /* esta función se pone aqui, dentro de la respuesta del servidor, para que se pinten dentro de los datos que devuelve el servidor*/
      paintPalettes();
      // pimero pinta y luego escucha, las favoritas
      listenPalettes()
    });  
}

// P.P. 2
/* se pone el ul en el HTML y desde js se selecciona
Podemos esbozar un prototipo del html para pintar la paleta en papel con los divs etc (o pintarlo en otro archivo para ver cómo quedaría y saber mejor qué hay que hacer con js)  <div class=" color__item" style="background-color: #ffcc00;">1</div> 

Los styles están en el html porque es más facil, ya que pueden variar, y al variar no puede hacerse permanente desde css, se guardarán en varibles y se incluirán alli */
const paletteContainer = document.querySelector(".js-palettes-contianer");
// con esto pintamos los li para pintar(el cuerpo para pintar), y mejor si pintamos cada linea por separado
function paintPalettes() {
  // con esta variable, pinta primero vacío y luego las pinta de nuevo, así no machada lo que se vaya a pintar después
  let html = "";

 // tiene la clase para inciar el 3 punto, el listen para ver cual es favorito y para que la clase se ponga y se quite, ha de ser dinámico, así se utiliza un for clásico y se sustituye el for of que había, con el i sabemos cual tiene clase, asi podemos identificar cual ha sido seleccionado. 
  
  for (let i = 0; i < palettes.length; i++) {
    html += `<li class = js-palette-item palettes__item--favorites> id="${i}"`;
    // este titulo en donde va el nombre de la nave, y en el array del servidor está en ese orden. La segunda clase es para poner el color, es una clase css. la primera para identificar si tiene la clase
   
    html += `<h2>${palettes[i].name}</h2>`;
    // para verifiar que se está guardando en el html los <li> ponemos palettesContainer.innerHTML = html;
    html += "<div>";
    // como colors es un arraya hay que hacer un for para acceder a ellos y añadirlo en el html
    for (const color of palettes[i].colors) {
      // ATENCIÓN con el # del color!!
      html += `<div class=" color__item" style="background-color:#${color};">1</div>`;
    }
    html += "</div>";
    html += "</li>";
  }
// NO SE VEN LOS CSS PORQUE NO LOS TENGO
//   console.log(html);
//   palettesContainer.innerHTML = html;
//   console.log("pintar");
// }
// lo que habría que hacer es añadir las clses del css a los a la clase del html, las clases se meten sin puntos, uno se metería en el for del de la función donde están lso colores en un div, y otro, el div container superior.
  
/*para pintar el resto de paletas, cambiamos la url del servidor donde están los datos del resto de naves, al cambiar la url se pintan los datos que vengan desde el servidor (en este caso en una misma url que cambia el plural de palette), porque con lo que hemos hecho antes de cambiar la ulr, con la anterior, ha sido un patrón del objeto, con menos datos. */
  
  const favoritesPalette = function (ev) {
    // el parseInt es para que convierta en número entero, el de la posición en el array, porque el id del html de la class que esucha, está en string y no lo interpreta como un número
    const clicked = parseInt(ev.currentTarget.id);
    // el método find es para recorrer un array y buscar algo, pero para usarse tiene que estar en una función, asi se aplica una arrow para que nos diga si es true, 
    const isFavorite = favoritesLis.find(click => {return click});
    // para añadir un elemento a un array hay que hacer push, el array vacío está declarado arriba, vacío para rellenarlo con los clickados
    favoritesLis.push(clicked);

    if(isFavorite)
  }
  
  
  function listenPalettes() {
// esta constante se declara aqui dentro y no fuera porque no se puede definir antes de que se ejecute el fetch (la petición). Vamos que sin tener la respueta del servidor no podemos recorrer el array
    const palettes = document.querySelectorAll(".js-palette-item"); 
    for (const paletteItem of paletteItems) {
      paletteItem.addEventListner("click", favoritesPalette);
      
    }
}

  
  
getData();
/* ULTIMOS PASOS , vamos a marcar como favoritas, para ello utilizamos el evento, para saber cual nave se ha clickado y añadirlo.
Para eso tenemos que identificar cual se ha clicado con un clase y guardarlos en un array. Entonces, ANTES hacemos el array para recorrerlos y así identificar cual tiene la clase. Parece lioso pero atenta, hacemo un evento para el listener(addEventListener), les damos una clase en el <li class = js-palette-*/


