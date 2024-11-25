let container = document.querySelector('.section-1')
let inputVal = document.querySelector('.inputVal')
let searchBtn = document.querySelector('.searchBtn')

let apiKey = "ad2de5fa";



async function dispalyMovie(){
    if(inputVal.value === "" || inputVal.value === undefined){
        alert("pahile search to krlo")
        return;
    }
    container.innerHTML = ""
    let data = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${inputVal.value}&type=movie&page=1`)
    let res = await data.json();
    console.log(res);
    
    res.Search.forEach((e)=>{
        console.log(e);
        
        let card = `
            <div class="card">
                <img src="${e.Poster}" alt="">
                <h2>${e.Title}</h2>
                <p>${e.Year}</p>
            </div>
        `

        container.innerHTML += card;
        
    })
    
}
searchBtn.addEventListener('click',dispalyMovie)