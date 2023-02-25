// unit_1 project


$(() => {

//biography that goes down
//carousel for projects

    let currentIndex = 0;

    const num = $('.projects').children().length - 1

    $('.next').on('click', () => {
       
        $('.projects').children().eq(currentIndex).css('display', 'none');
        
        if(currentIndex < num) {
            currentIndex++
           } else {
            currentImgIndex = 0
           }

        $('.projects').children().eq(currentIndex).css('display', 'block');
       })

$('.previous').on('click', () => {
        
        $('.projects').children().eq(currentIndex).css('display', 'none');
        
        if(currentIndex > 0) {
            currentIndex --
           } else {
            currentIndex = num
           }

        $('.projects').children().eq(currentIndex).css('display', 'block');
       })

    });


    const $show = $('<div>').addClass('show-description')

    $('div').on('click', function() {
     $(this).toggleClass('show-description');


    $('body').append($show);
});
