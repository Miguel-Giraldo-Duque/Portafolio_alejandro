const modal = document.querySelector(".modal2");
const open_modal = document.querySelector(".open-modal");
const close_modal = document.querySelector(".close-modal");


open_modal.addEventListener("click"  , () =>{
    modal.showModal()
})

close_modal.addEventListener("click" , () =>{
    modal.close()
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
