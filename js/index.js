let resultado_div = document.querySelector('div .resultado')

let input = document.querySelector('input')
// let button = document.querySelector('button')

//Função busca artista

function bucarArtista () {

    let url = `https://api.vagalume.com.br/search.art?q=${input.value}&limit=5`
    
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.response.docs[0].band)
        })
        .catch(err => {
            err = "erro aqui"
            return err
        })

    console.log(url) 
 
}
 

