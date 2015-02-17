jQuery(function ($) {

    var playerCount = 0;

    var player = {
        even: 'x',
        odd: 'o'
    };

    var winAdjacents = {
        "one": [
            ["two", "three"],
            ["four", "seven"],
            ["five", "nine"]
        ],
            "two": [
            ["one", "three"],
            ["five", "eight"]
        ],
            "three": [
            ["one", "two"],
            ["six", "nine"],
            ["seven", "five"]
        ],
            "four": [
            ["one", "seven"],
            ["five", "six"]
        ],
            "five": [
            ["four", "six"],
            ["two", "eight"],
            ["one", "nine"],
            ["three", "seven"]
        ],
            "six": [
            ["three", "nine"],
            ["four", "five"]
        ],
            "seven": [
            ["one", "four"],
            ["eight", "nine"],
            ["three", "five"]
        ],
            "eight": [
            ["two", "five"],
            ["seven", "nine"]
        ],
            "nine": [
            ["three", "six"],
            ["seven", "eight"],
            ["one", "five"]
        ]
    }

    function checkWin(elemID, currentClass) {
        var adjacs = winAdjacents[elemID];
        $.each(adjacs, function (index, value) {
            matched = 0;
            $.each(value, function (i, j) {
                if ($('#' + j).hasClass(currentClass)) {
                    matched = matched + 1;
                }
                if (matched >= 2) {
                    alert('"'+currentClass.slice(-1) + '" has won the game. Please refresh the page to start again.');
                    $('input').attr('disabled', 'disabled');
                }
            });
        });
    }

    $(document).ready(function () {
        $('input').click(function () {
            var currentClass = '';
            if (playerCount % 2 === 0) {
                currentClass = 'checked' + player.even
                $(this).parent().parent('div').addClass('x');
            } else {
                currentClass = 'checked' + player.odd
                $(this).parent().parent().addClass('o');
            }

            id = $(this).attr('id');
            $(this).addClass(currentClass);
            checkWin(id, currentClass);
            $(this).attr('disabled', 'disabled');
            playerCount = playerCount + 1;

        });
    });

});