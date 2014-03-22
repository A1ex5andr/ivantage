jQuery(document).ready(function($) {

    // button hover more/less toggle
    $('.navi-more ').hover(
        function() {
            $('.navi-more h2 storng').text('Less');
        }, function() {
            $('.navi-more h2 storng').text('More');
        }
    );

    // advanced search show/hide
    $('.advSearch-btn').click(function() {
        $('.advSearch-container').slideToggle('display');
    })

    //custom arrow for select drop list


    //popup controls show/hide
    // function hidePopUp() {
    //     $('#popUp').addClass('hide');
    // };
    // hidePopUp();

    $('.head-logo').click(function() {
        //$('#popUp').removeClass('hide');
        $('.popUp').addClass('show');

    });

    $('.cntrl-cancel').click(function() {
        $('.popUp').removeClass('show');
    });


});