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
        $('.popUp').addClass('show');

    });

    $('.cntrl-cancel').click(function() {
        $('.popUp').removeClass('show');
    });

    //popupAccaunt controls show/hide
    $('#popUpAcc').click(function(event) {
        event.preventDefault();
        $('.popUpAcc').addClass('show');
    });

    $('.cancelPopUpAcc').click(function() {
        $('.popUpAcc').removeClass('show');
    });

    //popupAccaunt table click
    var popUpTR = '.popUpAcc table tbody tr';
    $(popUpTR).click(function() {
        $(popUpTR).removeClass('accClick');
        $(this).addClass('accClick');
        $('.accTable_05').removeClass('accTable_05_SHOW');
        $(this).children('.accTable_05').addClass('accTable_05_SHOW');
    });

    //popUp Email
    $('#popUpMail ').click(function(event) {
        event.preventDefault();
        $('.popUpEmail').addClass('show');
    });

    $('.cntrl-discard').click(function() {
        $('.popUpEmail').removeClass('show');
    });

    $('.mailOpt').click(function() {
        var id = ($(this).attr('id'));
        var idCheckBox = id.split("_");
        var idCheckBox = idCheckBox[1];

        $('.mailOpt').removeClass('activeOpt');
        $(this).addClass('activeOpt');

        $('.allIncQuotes').addClass('hide');
        $('#checkBl_' + idCheckBox).removeClass('hide');
    });

    var targetOptTop = 1;
    var targetOptDown = 7;
    var targetOptLast = ($(".allMailOptions").children().length);

    function scrollMailUp(position) {
        console.log(targetOptTop);
        console.log(targetOptDown);
        if (targetOptTop > 1) {
            targetOptTop--;
            targetOptDown--;
            $('.mailOpt:nth-child(' + targetOptTop + ')').removeClass('hide');
            $('.mailOpt:nth-child(' + targetOptDown + ')').addClass('hide');
        };
    };

    function scrollMailDown(position) {
        console.log(targetOptTop);
        console.log(targetOptDown);
        if (targetOptDown < targetOptLast + 1) {
            $('.mailOpt:nth-child(' + targetOptTop + ')').addClass('hide');
            $('.mailOpt:nth-child(' + targetOptDown + ')').removeClass('hide');
            targetOptTop++;
            targetOptDown++;
        };
    };


    $('.moveOptDown').click(function() {
        scrollMailDown(+1);
    });

    $('.moveOptUp').click(function() {
        scrollMailUp(-1);
    });

    //if checkbox clicked update status for "Include Products"
    $('.incQuotes').find("input").click(function() {
        var parentId = ($(this).parents('.allIncQuotes').attr('id'));
        var idTag = parentId.split('_');
        var mailOptId = $('#mailOpt_' + idTag[1]);
        var checkBox = $('#checkBl_' + idTag[1]).find("input:checked").length;

        if (checkBox >= 1) {
            console.log(checkBox);
            mailOptId.find('.optWithMarks').addClass('makeVisual');
            mailOptId.find('.optMarked').text('(' + checkBox + ')');
        } else {
            mailOptId.find('.optWithMarks').removeClass('makeVisual');
            mailOptId.find('.optMarked').empty(checkBox);
        };

    });

    // if checkbox active make background colored   
    $('.incQuotes .formType-checkbox').click(function() {
        if ($(this).find("input:checked").length == 1) {
            $(this).css("background-color", "#c2e6ff");
            console.log($(this).attr('id'));
        } else if ($(this).find("input:checked").length != 1) {
            $(this).css("background-color", "transparent");
        }
    });

    // expand and collaps table rows on a result page
    $('.togBtn').click(function() {
        $(this).toggleClass('togBtnExt');
        $('.resultBl-toToggle').slideToggle();
    });

    // result tabs to show/hide clicked category
    // as example HOME or PET
    $('.resultNavBtn').click(function() {
        var idBtn = $(this).attr('id');
        console.log(idBtn);
        $('.resultNavBtn').removeClass('activeResNav');
        $(this).addClass('activeResNav');
        $('.resultBl>span').removeClass('resultBl-vissible');
        $('.resultBl>span#' + idBtn).addClass('resultBl-vissible');
    })

    // 02 Results blocks toggle
    $('.resultsAfter').click(function(event) {
        event.preventDefault();
        $('.resultsBefor').removeClass('activeBeforResult');
        $('.resultsAfter').addClass('activeAfterResult');
        $('.resultsBefor>span').addClass('textBlue');
        $('.resultArr').show();
        $('.resultRow-1, .resultRow-2, .resultRow-3, .resultRow-4, .resultRow-5, .resultRow-6, .resultRow-7').hide();
        $('.resultRow-8, .resultRow-9').show();
    })
    $('.resultsBefor').click(function(event) {
        event.preventDefault();
        $('.resultsBefor').addClass('activeBeforResult');
        $('.resultsAfter').removeClass('activeAfterResult');
        $('.resultsBefor>span').removeClass('textBlue');
        $('.resultArr').hide();
        $('.resultRow-1, .resultRow-2, .resultRow-3, .resultRow-4, .resultRow-5, .resultRow-6, .resultRow-7').show();
        $('.resultRow-8, .resultRow-9').hide();
    })


    // this runs calendar
    $(function() {
        $("#datepickerHead").datepicker();
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
        $("#datepicker3").datepicker();
        $("#datepicker4").datepicker();
        $("#datepicker01").datepicker();
        $("#datepicker02").datepicker();
        $("#datepicker11").datepicker();
        $("#datepicker22").datepicker();
        $("#datepicker33").datepicker();
        $("#datepicker44").datepicker();
        $("#datepicker55").datepicker();
        $("#datepicker66").datepicker();
        $("#datepicker77").datepicker();
        $("#datepicker88").datepicker();
        $("#datepicker99").datepicker();
        $("#datepicker111").datepicker();
        $("#datepicker222").datepicker();
        $("#datepicker333").datepicker();
        $("#datepicker444").datepicker();
        $("#datepicker555").datepicker();
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


    // custom select box with options
    $(function() {
        $(".e1").select2({
            minimumResultsForSearch: -1,
        });
    });
    // custom select box including images
    function format(state) {
        if (!state.id) return state.text; // optgroup
        return "<img class='specSelectImg' src='img/selectImg/" + state.id.toLowerCase() + ".png'/>" + state.text;
    }
    $(".specsSelect").select2({
        minimumResultsForSearch: -1,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function(m) {
            return m;
        }
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
    $("#blockContainer").on('click', '.formBlock', function(event) {
        /* Act on the event */
        $('.pageInfo-wrapper').removeClass('pageInfo-wrapperActive');
        $(this).closest('.pageInfo-wrapper').addClass('pageInfo-wrapperActive');
    });

    //delete or add block on formControls
    $('#blockContainer').on('click', '.formControl-but.butRem', function() {
        /* Act on the event */
        $(this).closest('.blockOfchars').remove();
    });

    //help and faq slide Blocks
    $('.slideBlock').on('click', 'header', function() {
        $(this).parent().toggleClass('slideBlockActive');
        $(this).next('p').slideToggle();
    })

    // change wizard dot oh link hover
    $('.wizardLink a').hover(function() {
        $(this).children('.wizardBl-dotPast').toggleClass('wizardBl-HOVER');
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

    //education tab switch
    $('.eduDetHead > div').on('click', function() {
        var id = $(this).attr('id');
        //console.log(id);
        $('.eduDetHead > div').removeClass('eduDet-active');
        $(this).addClass('eduDet-active');
        $('.eduData').removeClass('eduDataActive');
        $('.eduData_' + id).addClass('eduDataActive');

    })
    // education dropDown list
    // $('.eduProp-title').on('click', function() {
    //     $(this).siblings('.edu-prop').toggle();
    //     $('.arr-l2').toggle();
    // });

    //education link activation
    $('.eduData-links > p').on('click', function() {
        $('.eduData-links > p').removeClass('eduProp-active');
        $(this).addClass('eduProp-active');
        $('.showBlocks > div').hide();
    });

    // show if edu-compCov
    $('#edu-compCov').on('click', function() {
        $('.edu-compCov').show();
    });

    // spin color blocks
    function spinBlocks() {
        $('.spGrBl-01').fadeToggle('500', 'linear', function() {
            $('.spGrBl-02').fadeToggle('500', 'linear', function() {
                $('.spGrBl-03').fadeToggle('500', 'linear', function() {
                    $('.spGrBl-04').fadeToggle('500', 'linear', function() {
                        $('.spGrBl-05').fadeToggle('500', 'linear', function() {
                            $('.spGrBl-06').fadeToggle('500', 'linear', function() {
                                $('.spGrBl-07').fadeToggle('500', 'linear', function() {
                                    $('.spGrBl-08').fadeToggle('500', 'linear', function() {
                                        $('.spGrBl-09').fadeToggle('500', 'linear', function() {
                                            $('.spGrBl-10').fadeToggle('500', 'linear', function() {
                                                $('.spGrBl-11').fadeToggle('500', 'linear', function() {
                                                    $('.spGrBl-12').fadeToggle('500', 'linear', function() {
                                                        $('.spGrBl-13').fadeToggle('500', 'linear', function() {
                                                            $('.spGrBl-14').fadeToggle('500', 'linear', function() {
                                                                //final
                                                                spinBlocks();
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };



    //popup controls show/hide
    $('.eduDet-item_05').click(function() {
        $('.spinner').addClass('show');
        // slide spinner images 
        $('.directorySlider').directorySlider({
            animation: 'fade',
            filebase: 'slide_',
            directory: 'img/spinner/',
            extension: 'png',
            numslides: 6,
            speed: 1000,
            timeout: 1000,
        });
        //start spinner
        spinBlocks();

    });

    // message comments block

    //add new message
    $('.butAddMess').on('click', function() {
        var id = $(this).attr('id');
        var el = $(this);

        el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));

        $('.rowToShow_' + id).slideToggle('slow');
    })

    // if clicked make table row active

    $('.messCent-table').on('click', '.mC-col-edit', function() {
        var id = $(this).attr('id');
        var el = $(this);

        el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));

        $(this).toggleClass('mC-col-edit_show');
        $(this).parent().parent().toggleClass('activeTr');
        $('.rowToShow_' + id).slideToggle('slow');
        // $('.rowToShow_' + id).slideToggle('slow', function() {
        //     $(this).toggleClass('show');
        // });
    })

    /*
        #dropdown_00 with Multiple checkbox select
    */

    $("#dropdown_00 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_00 dd ul").slideToggle('fast');
    });

    $("#dropdown_00 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_00 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_00")) $("#dropdown_00 dd ul").hide();
    });


    $('.mutliSelect_00 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_00').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_00').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_00 dt a').append(ret);

        }
    });

    //#dropdown_00 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_00 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_00 end*/

    /*
        #dropdown_01 with Multiple checkbox select
    */

    $("#dropdown_01 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_01 dd ul").slideToggle('fast');
    });

    $("#dropdown_01 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_01 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_01")) $("#dropdown_01 dd ul").hide();
    });


    $('.mutliSelect_01 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_01').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_01').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_01 dt a').append(ret);

        }
    });

    //#dropdown_01 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_01 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_01 end*/

    /*
        #dropdown_02 with Multiple checkbox select
    */

    $("#dropdown_02 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_02 dd ul").slideToggle('fast');
    });

    $("#dropdown_02 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_02 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_02")) $("#dropdown_02 dd ul").hide();
    });


    $('.mutliSelect_02 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_02').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_02').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_02 dt a').append(ret);

        }
    });

    //#dropdown_02 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_02 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_02 end*/

    /*
        #dropdown_03 with Multiple checkbox select
    */

    $("#dropdown_03 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_03 dd ul").slideToggle('fast');
    });

    $("#dropdown_03 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_03 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_03")) $("#dropdown_03 dd ul").hide();
    });


    $('.mutliSelect_03 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_03').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_03').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_03 dt a').append(ret);

        }
    });

    //#dropdown_03 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_03 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_03 end*/

    /*
        #dropdown_04 with Multiple checkbox select
    */

    $("#dropdown_04 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_04 dd ul").slideToggle('fast');
    });

    $("#dropdown_04 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_04 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_04")) $("#dropdown_04 dd ul").hide();
    });


    $('.mutliSelect_04 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_04').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_04').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_04 dt a').append(ret);

        }
    });

    //#dropdown_04 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_04 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_04 end*/

    /*
        #dropdown_05 with Multiple checkbox select
    */

    $("#dropdown_05 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_05 dd ul").slideToggle('fast');
    });

    $("#dropdown_05 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_05 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_05")) $("#dropdown_05 dd ul").hide();
    });


    $('.mutliSelect_05 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_05').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_05').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_05 dt a').append(ret);

        }
    });

    //#dropdown_05 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_05 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_05 end*/

    /*
        #dropdown_06 with Multiple checkbox select
    */

    $("#dropdown_06 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_06 dd ul").slideToggle('fast');
    });

    $("#dropdown_06 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_06 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_06")) $("#dropdown_06 dd ul").hide();
    });


    $('.mutliSelect_06 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_06').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_06').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_06 dt a').append(ret);

        }
    });

    //#dropdown_06 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_06 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_06 end*/

    /*
        #dropdown_07 with Multiple checkbox select
    */

    $("#dropdown_07 dt a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_07 dd ul").slideToggle('fast');
    });

    $("#dropdown_07 dd ul li a").on('click', function(event) {
        event.preventDefault();
        $("#dropdown_07 dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dp_07")) $("#dropdown_07 dd ul").hide();
    });


    $('.mutliSelect_07 input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect_07').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel_07').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('#dropdown_07 dt a').append(ret);

        }
    });

    //#dropdown_07 dt > a arrow toggle
    $('.messCenter').on('click', '#dropdown_07 dt > a', function() {
        $(this).toggleClass('dropDownArrow');
    });

    /* #dropdown_07 end*/

    // if checkbox active make background colored   
    $('.dropdown .formType-checkbox').click(function() {
        if ($(this).find("input:checked").length == 1) {
            $(this).css("background-color", "#c2e6ff");
            console.log($(this).attr('id'));
        } else if ($(this).find("input:checked").length != 1) {
            $(this).css("background-color", "transparent");
        }
    });


});