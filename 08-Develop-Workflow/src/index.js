
const form = document.querySelector('form')
const searchField = document.querySelector('input[type=text')
const output = document.querySelector('.results')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var searchTerm = searchField.value;
    go(searchTerm)
        
    
})

async function go(term){
    try{
        var data = await search(term)
        await display(data)
        clearSearch()
    } catch(e){
        console.log("ERROR", e)
    }
}

async function search(term){
    return fetch(`http://www.omdbapi.com/?t=${term}`)
        .then(result => result.json())
        .catch(err => console.log(err))

}

async function display(movie){
    return new Promise((resolve, reject) => {
        var {Title, Year, Rated, Runtime, Poster} = movie
        output.innerHTML = 
            `<h3>${Title}</h3>
            <p>Made in ${Year}, rated ${Rated} and is ${Runtime} long.</p>
            <img src="${Poster}" />`
        setTimeout(() =>{
            resolve()
        }, 4000)
        
    })
}

function clearSearch(){
    searchField.value = ""
}