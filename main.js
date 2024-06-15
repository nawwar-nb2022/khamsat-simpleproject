const form = document.querySelector(".mainFormContainer")
const nameContainer = document.querySelector(".name-container")
const cardName = document.querySelector(".card-container")
const name = document.querySelector(".name")
const BackBtn = document.querySelector(".BackBtn")


form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    // test
    let textName = e.target[0].value

    name.textContent = textName 


    cardName.style.display ="block"
    nameContainer.style.display ="none"
    
})



cardName.style.display ="none"

BackBtn.addEventListener("click" , ()=>{
    
    cardName.style.display ="none"
    nameContainer.style.display ="flex"
})