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
            container.slideUp(300);
        } else {
            // Show - slide down.
            container.slideDown(300, function() {
                $('.canc').css('display', 'inline-block');
                $('.srch').css('display', 'inline-block');
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

    // Modified Date sort arrow
    var sortArrow = $('.tableSorter');
    sortArrow.click(function(event) {
        $('.sortArrow').toggleClass('up');
    });

    //hide if clicked out of advanced search box
    $(document).click(function(e) {
        if ($(e.target).parents('.advSearch').first().length == 0 && container.is(":visible"))
        //container.fadeOut(300);
            slideAdvancedSearch();
    });


    //popup controls show/hide
    $('.head-logo').click(function() {
        //$('#popUp').removeClass('hide');
        $('.popUp').addClass('show');

    });

    $('.cntrl-cancel').click(function() {
        $('.popUp').removeClass('show');
    });


    // formBlock-input inputDropdown
    var dropList = $('.inputDropdown>ul');

    $(".inputDropdown").on('click', dropList, function(event) {

        if (dropList.is(":visible")) {
            // Hide - slide up.

            $(this).children('ul').slideUp(300);
            $(this).children('.inputDropdown-arrow').removeClass('inputDropdown-arrowUp');
            event.stopPropagation();

        } else {


            // Show - slide down.
            $(this).children('ul').slideDown(300);
            $(this).children('.inputDropdown-arrow').addClass('inputDropdown-arrowUp');

            event.stopPropagation();
        }
    });

    $('.inputDropdownList li').on('click', function(event) {
        var dropdownItem = $(event.target);

        var newData = dropdownItem.html();
        var target = $(this).parent().siblings('.newTarget');
        target.html(newData);


    });

    //hide if clicked out of dropdown  box
    $(document).click(function(e) {
        if ($(e.target).parents('.inputDropdown').first().length == 0 && dropList.is(":visible"))
            $('.inputDropdown-arrow').removeClass('inputDropdown-arrowUp');
        dropList.fadeOut(300);

    });

});