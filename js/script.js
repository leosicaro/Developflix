import peliculas from './peliculas.js'

//tipos:
//traemos el espacio a rellena
const genAccion = document.getElementById("genero-28")
const genThriller = document.getElementById("genero-53")
const genAventura = document.getElementById("genero-12")
const imgFont = "https://image.tmdb.org/t/p/w500"

// ahora tenemos las peliculas filtradas
const accionFilter = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
let accion_Posters = []
         accionFilter.forEach((poster)=>{
            accion_Posters.push(imgFont + poster.poster_path)
            return accion_Posters})
            console.log(accion_Posters)

            accion_Posters.forEach((direccion)=>{
               const accion_cartel = document.createElement("img")
               accion_cartel.setAttribute("src",direccion)
               genAccion.appendChild(accion_cartel)
            })

let accion_movies= []
            accionFilter.forEach((titulo)=>{
            accion_movies.push(titulo.original_title)
            return accion_movies})
   
            console.log(accion_movies)
   
               accion_movies.forEach((title) => {
                  const li = document.createElement("li");
                  li.textContent = title;
                  genAccion.appendChild(li)})


const thrillerFilter = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
let thrillerPosters = []
     thrillerFilter.forEach((direccion)=>{
      thrillerPosters.push(imgFont + direccion.poster_path)
      return thrillerPosters
     })
     thrillerPosters.forEach((thrposters)=>{
      let thrcartel = document.createElement("img")
      thrcartel.setAttribute("src",thrposters)
      genThriller.appendChild(thrcartel)
     })
     let thrpeli= []
            thrillerFilter.forEach((thrTittle)=>{
            thrpeli.push(thrTittle.original_title)
            return thrpeli})
   
            console.log(thrpeli)
   
               thrpeli.forEach((pelicula) => {
                  const li = document.createElement("li");
                  li.textContent = pelicula;
                  genThriller.appendChild(li)});



const aventuraFilter = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));


      let avPoster = []
         aventuraFilter.forEach((poster)=>{
            avPoster.push(imgFont + poster.poster_path)
            return avPoster})
            console.log(avPoster)

            avPoster.forEach((advPoster)=>{
               const cartel = document.createElement("img")
               cartel.setAttribute("src",advPoster)
               genAventura.appendChild(cartel)
            })

            let avPeli= []
            aventuraFilter.forEach((avTittle)=>{
            avPeli.push(avTittle.original_title)
            return avPeli})
   
            console.log(avPeli)
   
               avPeli.forEach((pelicula) => {
                  const li = document.createElement("li");
                  li.textContent = pelicula;
                  genAventura.appendChild(li)});
   
         


         





//accionFilter.forEach((find_movie)=>{
 //console.log (find_movie.original_title,)})
//
 //thrillerFilter.forEach((find_movie)=>{
    //console.log (find_movie.original_title,)})
 



