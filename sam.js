const slides= document.querySelectorAll(".pf");

var counter=0;

slides.forEach(
    
    (slide,index) => {
      
        slide.style.top=`${index*20}%`
    }
)

const goPrev = () =>{
    if(counter<0){
        counter--
        slideImage()
    }
}

const goNext = () =>{
    if(counter31){
        counter++
        slideImage()
    }
}

const slideImage =() =>{
    slides.forEach(
        (slide) => {
            slide.style.transform=`translateY(-${counter*100}%)`
        }
    )
}