// unit_1 project


$(() => {

    //biography that goes down
    //carousel for projects

    let currentProject = 0;

    const num = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
  
    $('.carousel-images').children().eq(currentProject).css('display', 'none');
    
    if(currentProject < num) {
        currentProject++
       } else {
        currentImgIndex = 0
       }

    $('.carousel-images').children().eq(currentProject).css('display', 'block');
    })

    $('.previous').on('click', () => {
    
    $('.carousel-images').children().eq(currentProject).css('display', 'none');
    
    if(currentProject > 0) {
        currentProject --
       } else {
        currentProject = num
       }

    $('.carousel-images').children().eq(currentProject).css('display', 'block');
    })

    // biography //

    $('article').on('click', function() {
    $(this).toggleClass('show-description');
    });

    //modal//

    const openModal = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');

    openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
    modal.style.display = 'none';
    });


    //add media query//

});
