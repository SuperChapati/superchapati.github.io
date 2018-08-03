
    setInterval(function () {

        var titleColor = document.getElementById("myTitle").style;


        if (titleColor.color == "blue") {
            titleColor.color = "red"

        }
        else {
            titleColor.color = "blue"

        }


    }, 1000);

    setInterval(function () {

        var titleColor = document.getElementById("myInfo").style;


        if (titleColor.color == "black") {
            titleColor.color = "greenyellow"

        }
        else {
            titleColor.color = "black"

        }


    }, 500);



