var boton = document.getElementById('buton');
var contenedor = document.getElementById('contenedor');
var posts = null;
boton.addEventListener('click', function(){

    fetch()
});
function mostrardatos(posts){
    posts.map((post, i) =>{
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
};