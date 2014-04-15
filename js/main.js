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
        $("#datepicker4").datepicker();
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
    // $("select").selectBoxIt({
    //     aggressiveChange: true
    // });
    $(function(){ 
        $(".e1").select2({
            minimumResultsForSearch: -1,
        }); 
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

    //delete or add block on formControls
    $('#blockContainer').on('click', '.formControl-but.butRem', function() {
        /* Act on the event */
        $(this).closest('.blockOfchars').remove();
    });


    // what we add as a block of charachteristics
    var addBlock = '<span class="blockOfchars">' +
        '<div class="headerInput">' +
        ' <h3 class="h3">New Block Name</h3>' +
        '</div>' +
        '<div class="pageInfo-wrapper clearfix">' +
        '<div class="formWrap clearfix">' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Pet Name' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        ' <div class="formBlock-input inputResponsive">' +
        '  <input class="formBlock-input input-normal" placeholder=" ">' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Breed Type' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        ' <div class="formBlock-input inputResponsive">' +
        '  <input class="formBlock-input input-normal" placeholder=" ">' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Date of Birth' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class=" ">' +
        '<select class="e1New">' +
        ' <option value="SelectBoxIt is:">SelectBoxIt is:</option>' +
        ' <option value="a jQuery Plugin">a jQuery Plugin</option>' +
        '  <option value="a Select Box Replacement">a Select Box Replacement</option>' +
        '   <option value="a Stateful UI Widget">a Stateful UI Widget</option>' +
        '  </select>' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Spayed of Neutered' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class="radioBlWrap">' +
        '<div class="formType-radio">' +
        '<input type="radio" name="name3" value="#1" id="location5">' +
        '<label for="location5" class="location5"></label>' +
        '</div><span class="radioLable">Yes</span>' +
        '  <div class="formType-radio">' +
        '   <input type="radio" name="name3" value="#1" id="location6">' +
        '    <label for="location6" class="location6"></label>' +
        '   </div><span class="radioLable">No</span>' +
        '  </div>' +
        ' </div>' +
        '</div>' +
        '<div class="formWrap clearfix">' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Species' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class="">' +
        '<select class="e1New">' +
        '<option value="SelectBoxIt is:">SelectBoxIt is:</option>' +
        ' <option value="a jQuery Plugin">a jQuery Plugin</option>' +
        '  <option value="a Select Box Replacement">a Select Box Replacement</option>' +
        '   <option value="a Stateful UI Widget">a Stateful UI Widget</option>' +
        '  </select>' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        ' <div class="formBlock-title">' +
        '  Breed' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class="">' +
        '<select class="e1New">' +
        '<option value="SelectBoxIt is:">SelectBoxIt is:</option>' +
        ' <option value="a jQuery Plugin">a jQuery Plugin</option>' +
        '  <option value="a Select Box Replacement">a Select Box Replacement</option>' +
        '   <option value="a Stateful UI Widget">a Stateful UI Widget</option>' +
        '  </select>' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Gender' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class="">' +
        '<select class="e1New">' +
        '<option value="SelectBoxIt is:">SelectBoxIt is:</option>' +
        ' <option value="a jQuery Plugin">a jQuery Plugin</option>' +
        '  <option value="a Select Box Replacement">a Select Box Replacement</option>' +
        '   <option value="a Stateful UI Widget">a Stateful UI Widget</option>' +
        '  </select>' +
        ' </div>' +
        '</div>' +
        '<div class="formBlock">' +
        '<div class="formBlock-title">' +
        'Has Cushings, Diabetes or FeLV/FIV?' +
        ' <span class="formBlock-reqInfo"></span>' +
        '</div>' +
        '<div class="radioBlWrap">' +
        '<div class="formType-radio">' +
        '<input type="radio" name="name4" value="#1" id="location7">' +
        '<label for="location7" class="location7"></label>' +
        '</div><span class="radioLable">Yes</span>' +
        '  <div class="formType-radio">' +
        '   <input type="radio" name="name4" value="#1" id="location8">' +
        '    <label for="location8" class="location8"></label>' +
        '   </div><span class="radioLable">No</span>' +
        '  </div>' +
        ' </div>' +
        '</div>' +
        '   <div class="formControl">' +
        '    <div class="formControl-but butRem">&#45;</div>' +
        '    <div class="formControl-name">Remove</div>' +
        '   </div>' +
        '</div>' +
        '</span>';

    $('.formControl-but.butAdd').click(function(event) {
        /* Act on the event */
        $('#targetPrependChars').append(addBlock);
        $("select.e1New").select2({
            minimumResultsForSearch: -1,
        }); 
 
    });

});