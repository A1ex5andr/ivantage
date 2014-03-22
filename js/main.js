jQuery(document).ready(function($) {

    // button hover more/less toggle
    $('.navi-more ').hover(
        function() {
            $('.navi-more h2 storng').text('Less');
        }, function() {
            $('.navi-more h2 storng').text('More');
        }
    );

    // advanced search show/hide and buttons callBack
    var container = $(".advSearch-container");
    // Bind the link to toggle the slide.
    var slideAdvancedSearch = function() {
        // Toggle the slide based on its visibility
        if (container.is(":visible")) {
            // Hide - slide up.
            container.slideUp(1000);
            $('.canc').slideToggle('fast');
            $('.srch').slideToggle('fast');
        } else {
            // Show - slide down.
            container.slideDown(1000, function() {
                $('.canc').slideToggle('fast');
                $('.srch').slideToggle('fast');
            });
        }
    };

    //run slide on AdvSearch button
    $(".advSearch-btn").click(function() {
        slideAdvancedSearch();
    });
    //run slide on Cancel button
    $('.canc').click(function(event) {
        slideAdvancedSearch();
    });


    //custom arrow for select drop list
    $('#formList').customSelect();


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