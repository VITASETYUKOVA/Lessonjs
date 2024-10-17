let currentIndex = 0; 
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; 
const dots = document.querySelectorAll('.dot'); 

function showSlide(index) {    
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active'); 
        dots[i].classList.remove('active'); 
    }

    slides[index].classList.add('active'); 
    dots[index].classList.add('active'); 

    if (index === 0) {
        document.getElementById('prev').style.display = 'none'; 
    } else {
        document.getElementById('prev').style.display = 'block'; 
    }

    if (index === totalSlides - 1) {
        document.getElementById('next').style.display = 'none'; 
    } else {
        document.getElementById('next').style.display = 'block'; 
    }
}

document.getElementById('next').addEventListener('click', function() {
    currentIndex++; 
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }
    showSlide(currentIndex); 
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex--; 
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; 
    }
    showSlide(currentIndex); 
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        currentIndex = index; 
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);