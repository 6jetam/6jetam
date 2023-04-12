window.onload = function(){
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('btn');
      
        console.log(btn); // HTMLButtonElement object
      
        // ✅ Works as expected
        btn.addEventListener('click', () => {
          alert('You clicked the button');
        });
      });
    
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    
    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });
}


