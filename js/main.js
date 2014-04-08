jQuery(document).ready(function($) {

    // button hover more/less toggle
    $('.navi-more ').hover(
        function() {
            $('.naviMoreTitle').text('Less');
        }, function() {
            $('.naviMoreTitle').text('More');
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



    // this runs calendar
    $(function() {
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
        $("#datepicker3").datepicker();
    });
    //$("#datepicker").datepicker().datepicker("setDate", new Date());//todays date in datepicker on start

    //autocmplete input field
    $(function() {
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $("#tags").autocomplete({
            source: availableTags
        });
    });

    //tolltip
    $('.tip').hover(function() {
        $('.toolNote-img').toggleClass('showTip');
        $('.toolNote-mess').toggleClass('showTip');
    });

    // custom select box with options
    $("select").selectBoxIt({
        aggressiveChange: true
    });

    //dropdown arrow on open state for select
    $("select").bind({
        // Binds to the 'open' event on the original select box
        "open": function() {
            $(this).next().find("#testSelectBoxItArrow").addClass("dropup");
        },
        "close": function() {
            $(this).next().find("#testSelectBoxItArrow").removeClass("dropup");
        }
    });

    //focus if internal formBlock active
    $(".pageInfo-wrapper").on('click', '.formBlock-input', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('.pageInfo-wrapper').removeClass('pageInfo-wrapperActive');
        $(this).closest('.pageInfo-wrapper').addClass('pageInfo-wrapperActive');
    });

});