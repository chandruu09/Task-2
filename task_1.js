// Use CSS to create a basic image gallery with thumbnail images that enlarge when clicked.

function openModal(imageUrl) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  


//   Implement a simple image slideshow that automatically transitions between images 

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  } 
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
