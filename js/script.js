$(document).ready(function() {

    $('body').on('touchmove', false);

    $('#header').append(headerText);

    shuffle(BingoArray);

    for (i = 0; i < 24; i++) {

        if (i == 12) {
            $('#board').append("<div data-value='1' class='selected freesquare' id='sqfree'><div class='text'>Bullshit Bingo</div></div>");
            $('#board').append("<div data-value='0' class='square' id='sq12'><div class='text'>" + BingoArray[i] + "</div></div>");
        } else {
            $('#board').append("<div data-value='0' class='square' id='sq" + i + "'><div class='text'>" + BingoArray[i] + "</div></div>");
        }
    }

    $('div.square').tappable(function() {
        //get values before click
        var row1_before = ($('#sq0').data('value') + $('#sq1').data('value') + $('#sq2').data('value') + $('#sq3').data('value') + $('#sq4').data('value'));
        var row2_before = ($('#sq5').data('value') + $('#sq6').data('value') + $('#sq7').data('value') + $('#sq8').data('value') + $('#sq9').data('value'));
        var row3_before = ($('#sq10').data('value') + $('#sq11').data('value') + $('#sqfree').data('value') + $('#sq12').data('value') + $('#sq13').data('value'));
        var row4_before = ($('#sq14').data('value') + $('#sq15').data('value') + $('#sq16').data('value') + $('#sq17').data('value') + $('#sq18').data('value'));
        var row5_before = ($('#sq19').data('value') + $('#sq20').data('value') + $('#sq21').data('value') + $('#sq22').data('value') + $('#sq23').data('value'));

        var col1_before = ($('#sq0').data('value') + $('#sq5').data('value') + $('#sq10').data('value') + $('#sq14').data('value') + $('#sq19').data('value'));
        var col2_before = ($('#sq1').data('value') + $('#sq6').data('value') + $('#sq11').data('value') + $('#sq15').data('value') + $('#sq20').data('value'));
        var col3_before = ($('#sq2').data('value') + $('#sq7').data('value') + $('#sqfree').data('value') + $('#sq16').data('value') + $('#sq21').data('value'));
        var col4_before = ($('#sq3').data('value') + $('#sq8').data('value') + $('#sq12').data('value') + $('#sq17').data('value') + $('#sq22').data('value'));
        var col5_before = ($('#sq4').data('value') + $('#sq9').data('value') + $('#sq13').data('value') + $('#sq18').data('value') + $('#sq23').data('value'));

        var diag1_before = ($('#sq0').data('value') + $('#sq6').data('value') + $('#sqfree').data('value') + $('#sq17').data('value') + $('#sq23').data('value'));
        var diag2_before = ($('#sq4').data('value') + $('#sq8').data('value') + $('#sqfree').data('value') + $('#sq15').data('value') + $('#sq19').data('value'));

        $(this).toggleClass('selected');
        if ($(this).data('value') == 1) {
            $(this).data('value', 0);
        } else {
            $(this).data('value', 1);
        }

        clickSnd.play();

        //get values after click
        var row1_after = ($('#sq0').data('value') + $('#sq1').data('value') + $('#sq2').data('value') + $('#sq3').data('value') + $('#sq4').data('value'));
        var row2_after = ($('#sq5').data('value') + $('#sq6').data('value') + $('#sq7').data('value') + $('#sq8').data('value') + $('#sq9').data('value'));
        var row3_after = ($('#sq10').data('value') + $('#sq11').data('value') + $('#sqfree').data('value') + $('#sq12').data('value') + $('#sq13').data('value'));
        var row4_after = ($('#sq14').data('value') + $('#sq15').data('value') + $('#sq16').data('value') + $('#sq17').data('value') + $('#sq18').data('value'));
        var row5_after = ($('#sq19').data('value') + $('#sq20').data('value') + $('#sq21').data('value') + $('#sq22').data('value') + $('#sq23').data('value'));

        var col1_after = ($('#sq0').data('value') + $('#sq5').data('value') + $('#sq10').data('value') + $('#sq14').data('value') + $('#sq19').data('value'));
        var col2_after = ($('#sq1').data('value') + $('#sq6').data('value') + $('#sq11').data('value') + $('#sq15').data('value') + $('#sq20').data('value'));
        var col3_after = ($('#sq2').data('value') + $('#sq7').data('value') + $('#sqfree').data('value') + $('#sq16').data('value') + $('#sq21').data('value'));
        var col4_after = ($('#sq3').data('value') + $('#sq8').data('value') + $('#sq12').data('value') + $('#sq17').data('value') + $('#sq22').data('value'));
        var col5_after = ($('#sq4').data('value') + $('#sq9').data('value') + $('#sq13').data('value') + $('#sq18').data('value') + $('#sq23').data('value'));

        var diag1_after = ($('#sq0').data('value') + $('#sq6').data('value') + $('#sqfree').data('value') + $('#sq17').data('value') + $('#sq23').data('value'));
        var diag2_after = ($('#sq4').data('value') + $('#sq8').data('value') + $('#sqfree').data('value') + $('#sq15').data('value') + $('#sq19').data('value'));

        //trigger only, when row, col or diag changed from 4 to 5
        if (row1_before == 4 && row1_after == 5 || row2_before == 4 && row2_after == 5 || row3_before == 4 && row3_after == 5 || row4_before == 4 && row4_after == 5 || row5_before == 4 && row5_after == 5 || col1_before == 4 && col1_after == 5 || col2_before == 4 && col2_after == 5 || col3_before == 4 && col3_after == 5 || col4_before == 4 && col4_after == 5 || col5_before == 4 && col5_after == 5 || diag1_before == 4 && diag1_after == 5 || diag2_before == 4 && diag2_after == 5) {
            $('#header').html(winText);
            $('#header').addClass("win");

            winSnd.play();

        } else {
            $('#header').html(headerText);
            $('#header').removeClass("win");
        };
    });
});


shuffle = function(v) {
    for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function(win) {
    var doc = win.document;

    // If there's a hash, or addEventListener is undefined, stop here
    if (!location.hash && win.addEventListener) {

        //scroll to 1
        window.scrollTo(0, 1);
        var scrollTop = 1,
            getScrollTop = function() {
                return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
            },

            //reset to 0 on bodyready, if needed
            bodycheck = setInterval(function() {
                if (doc.body) {
                    clearInterval(bodycheck);
                    scrollTop = getScrollTop();
                    win.scrollTo(0, scrollTop === 1 ? 0 : 1);
                }
            }, 15);

        win.addEventListener("load", function() {
            setTimeout(function() {
                //at load, if user hasn't scrolled more than 20 or so...
                if (getScrollTop() < 20) {
                    //reset to hide addr bar at onload
                    win.scrollTo(0, scrollTop === 1 ? 0 : 1);
                }
            }, 0);
        });
    }
})(this);