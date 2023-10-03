document.addEventListener("DOMContentLoaded",() =>{
    const elementosCarrusel = document.querySelectorAll(".carousel")
   let date = M.Carousel.init(elementosCarrusel ,{
        duration: 150,
       
        paddin: 5,
        numVisible: 2
    })
 
    

    let cuauntum = document.getElementsByClassName("items")
     

        // cuauntum[0].style.backgroundColor = '#FF00FF';


    return(date)        
    
})