// unit_1 project


$(() => {

//biography that goes down
//carousel for projects

let currentImgIndex = 0;

const numOfImages = $('.carousel-images').children().length - 1

$('.next').on('click', () => {
  
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    
    if(currentImgIndex < numOfImages) {
        currentImgIndex++
       } else {
        currentImgIndex = 0
       }

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
   })

$('.previous').on('click', () => {
    
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    
    if(currentImgIndex > 0) {
        currentImgIndex --
       } else {
        currentImgIndex = numOfImages
       }

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
   })

   /* biography */

   $('article').on('click', function() {
    $(this).toggleClass('show-description');
});

/* add media query */
/*modal*/

const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});






});
