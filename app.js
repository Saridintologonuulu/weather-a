
const api_url = 'https://api.sampleapis.com/coffee/'

const iced = document.querySelector('.iced')
const buttons = document.querySelectorAll('#btns button')

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        iced.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
        fetchiced(btn.innerText)
        
    })
})


function fetchiced(genre = 'hot'){
    fetch(api_url + genre)
    .then( (response) => {
        console.log(response, '----respense ----');
        
        return response.json()
    })
    .then((icedData) => {
        console.log(icedData, '----data----');
        renderCard(icedData)
        
    })

}

fetchiced()


function renderCard(arr = []){
    iced.innerHTML = arr.map( (coffee) => {
        return`
        <div class="card" style="width: 18rem;">
            <img src="${coffee.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${coffee.title}</h5>
            </div>
        </div>
        `
    })
}


