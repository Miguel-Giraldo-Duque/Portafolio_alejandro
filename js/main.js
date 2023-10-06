const openModal = document.querySelectorAll("[data-target]")
const modal = document.querySelectorAll(".modal2")
const closeModal = document.querySelectorAll(".close-modal")
const source = document.createElement("source")
const video = document.getElementById("video")


function changeUrl(url) {
    video.src = url
    video.play()
}

if (screen.width < 1024) {
    changeUrl(".")
   console.log(video.src)
}





console.log(video)

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
        indicators: true ,
        paddin: 5,
        numVisible: 2
    })
 
    


    return(date)        
    
})
