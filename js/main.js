const openModal = document.querySelectorAll("[data-target]")
const modal = document.querySelectorAll(".modal2")
const closeModal = document.querySelectorAll(".close-modal")

console.log("Hola")

openModal.forEach(function(btn) {
   btn.addEventListener("click", ()=>{  
    let actual = document.querySelector(btn.dataset.target)
    actual.showModal()
   })
})

closeModal.forEach(function(btn) {
    btn.addEventListener("click", ()=>{  
     let actual = document.querySelector(btn.dataset.target)
     actual.close()
    })
 })

document.addEventListener("DOMContentLoaded",() =>{
    const elementosCarrusel = document.querySelectorAll(".carousel")
   let date = M.Carousel.init(elementosCarrusel ,{
        duration: 150,
       
        paddin: 5,
        numVisible: 2
    })
 
    


    return(date)        
    
})
