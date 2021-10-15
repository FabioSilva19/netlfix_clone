
function requisicao(info){
    let req = new XMLHttpRequest();
    req.open('get', `http://www.omdbapi.com/?t=${info}&apikey=77d05d38`)
    req.send()
    req.onreadystatechange = () =>{
    if(req.readyState == 4 && req.status == 200){
                    
        let dadosJson = req.responseText 
        let dadosJsonObj = JSON.parse(dadosJson) 


        console.log(dadosJsonObj.Poster)

        document.getElementById("modal-info").style.display = 'flex'
        document.getElementById("imagem-info").src = dadosJsonObj.Poster
  
        titulo = document.createTextNode(dadosJsonObj.Title);
        document.getElementById('titulo-info').appendChild(titulo)

        sinopse = document.createTextNode(dadosJsonObj.Plot);
        document.getElementById('desc-info').appendChild(sinopse)

        nota = document.createTextNode("Nota IMDB: " + dadosJsonObj.imdbRating);
        document.getElementById('nota-info').appendChild(nota)

        genero = document.createTextNode(dadosJsonObj.Genre);
        document.getElementById('genero-info').appendChild(genero)
    }
}
}



function fecharModal(){
    document.getElementById("modal-info").style.display = 'none'
    limparInfo();
     
}


function limparInfo(){
    document.getElementById('titulo-info').removeChild(titulo)
     document.getElementById('desc-info').removeChild(sinopse)
     document.getElementById('nota-info').removeChild(nota)
     document.getElementById('genero-info').removeChild(genero)
}

