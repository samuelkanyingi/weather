const btn = document.getElementById("btn");
const img = document.querySelector("img");
const searchBtn = document.getElementById("searchBtn");
const errorMessage = document.getElementById("errorMessage");
const  searchInput = document.getElementById("searchInput");
console.log(searchBtn)



btn.addEventListener("click", function Message() {
    //alert("hello")
    fetchGif();
    })
async function fetchGif(searchTerm) {
    try {
    img.src = ''
    errorMessage.textContent = ""
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=WTlTsaEbM6PVansCJXAs1GwjcjdSZyDO&s=${searchTerm}`, {mode: 'cors'})
    const catData = await response.json()
    img.src=catData.data.images.original.url;
    }
        /*.then(function(catData) {
            console.log(catData)
            if(catData.data.length === 0){
                img.src = "https://via.placeholder.com/300?text=No+GIF+Found";
                errorMessage.textContent = "gif not found";
            }
            else
                img.src=response.data.images.original.url;
            })*/
    catch(error){
        console.error("sorry error while fetching...", error)
    }
}
console.log(searchBtn);

searchBtn.addEventListener("click", function(){
    const query= searchInput.value.trim();
    if(query) 
        fetchGif(query)
    else
    errorMessage.textContent = "please enter search term"
})
