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
            $('.canc').css('display', 'none');
            $('.srch').css('display', 'none');
            container.slideUp(1000);
        } else {
            // Show - slide down.
            container.slideDown(1000, function() {
                $('.canc').css('display', 'inline-block');
                $('.srch').css('display', 'inline-block');

                // $(document).click(function() {
                //     if (container.is(":visible")) {
                //         container.fadeOut(300);
                //     } else {
                //         e.stopPropagation();
                //         console.log('its stoped');
                //     }
                // });
                // $(document).click(function(event) {
                //     if ($(event.target).parents().index(container) == -1) {
                //         if (container.is(":visible")) {
                //             container.hide()
                //         }
                //     }
                // })
            });
        }
    };

    //run slide on AdvSearch button
    $(".advSearch-btn").click(function() {
        slideAdvancedSearch();
        //hide if clicked out of advanced search box
        // $(document).click(function() {
        //     if (!$(event.target).parents().is(container) && !$(event.target).is($('.advSearch-btn'))) {
        //         $('.canc').css('display', 'none');
        //         $('.srch').css('display', 'none');
        //         container.slideUp(1000);
        //     }
        // });
    });
    //run slide on Cancel button
    $('.canc').click(function(event) {
        slideAdvancedSearch();
    });

    // Modified Date sort arrow
    var sortArrow = $('.sortArrow');
    sortArrow.click(function(event) {
        $(this).toggleClass('up');
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