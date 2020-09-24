$(document).ready(function () {
    $.getJSON('sliderr.json', function (data) {
        $("img").eq(0).attr("src", "img/" + data.slider[0].image);
        $("img").eq(1).attr("src", "img/" + data.slider[1].image);
        $("img").eq(2).attr("src", "img/" + data.slider[2].image);
        $("img").eq(3).attr("src", "img/" + data.slider[3].image);
        $("img").eq(4).attr("src", "img/" + data.slider[4].image);

        $("h1").text(data.slider[0].text.h1);
        $("p").text(data.slider[0].text.p);

        let img1Pos = 0;
        let img2Pos = 100;
        let img3Pos = 200;
        let img4Pos = 300;
        let img5Pos = 400;

        $("img").eq(0).css({ "left": img1Pos + "%" });
        $("img").eq(1).css({ "left": img2Pos + "%" });
        $("img").eq(2).css({ "left": img3Pos + "%" });
        $("img").eq(3).css({ "left": img4Pos + "%" });
        $("img").eq(4).css({ "left": img5Pos + "%" });

        $(".fa-angle-left").click(function () {
            img1Pos += 100;
            img2Pos += 100;
            img3Pos += 100;
            img4Pos += 100;
            img5Pos += 100;
            $("img").eq(0).animate({ "left": img1Pos + "%" });
            $("img").eq(1).animate({ "left": img2Pos + "%" });
            $("img").eq(2).animate({ "left": img3Pos + "%" });
            $("img").eq(3).animate({ "left": img4Pos + "%" });
            $("img").eq(4).animate({ "left": img5Pos + "%" });

            if (img1Pos == 100) {
                img1Pos -= 100;
                img2Pos -= 100;
                img3Pos -= 100;
                img4Pos -= 100;
                img5Pos -= 100;
                $("img").eq(0).animate({ "left": img1Pos + "%" });
                $("img").eq(1).animate({ "left": img2Pos + "%" });
                $("img").eq(2).animate({ "left": img3Pos + "%" });
                $("img").eq(3).animate({ "left": img4Pos + "%" });
                $("img").eq(4).animate({ "left": img5Pos + "%" });
            }

            if (img1Pos == -400) {
                $("h1").text(data.slider[4].text.h1);
                $("p").text(data.slider[4].text.p);
            }
            else if (img1Pos == -300) {
                $("h1").text(data.slider[3].text.h1);
                $("p").text(data.slider[3].text.p);
            }
            else if (img1Pos == -200) {
                $("h1").text(data.slider[2].text.h1);
                $("p").text(data.slider[2].text.p);
            }
            else if (img1Pos == -100) {
                $("h1").text(data.slider[1].text.h1);
                $("p").text(data.slider[1].text.p);
            }
            else if (img1Pos == 0) {
                $("h1").text(data.slider[0].text.h1);
                $("p").text(data.slider[0].text.p);
            }
        });

        $(".fa-angle-right").click(function () {
            img1Pos -= 100;
            img2Pos -= 100;
            img3Pos -= 100;
            img4Pos -= 100;
            img5Pos -= 100;
            $("img").eq(0).animate({ "left": img1Pos + "%" });
            $("img").eq(1).animate({ "left": img2Pos + "%" });
            $("img").eq(2).animate({ "left": img3Pos + "%" });
            $("img").eq(3).animate({ "left": img4Pos + "%" });
            $("img").eq(4).animate({ "left": img5Pos + "%" });

            if (img1Pos == -500) {
                img1Pos += 100;
                img2Pos += 100;
                img3Pos += 100;
                img4Pos += 100;
                img5Pos += 100;
                $("img").eq(0).animate({ "left": img1Pos + "%" });
                $("img").eq(1).animate({ "left": img2Pos + "%" });
                $("img").eq(2).animate({ "left": img3Pos + "%" });
                $("img").eq(3).animate({ "left": img4Pos + "%" });
                $("img").eq(4).animate({ "left": img5Pos + "%" });
            }

            if (img1Pos == -100) {
                $("h1").text(data.slider[1].text.h1);
                $("p").text(data.slider[1].text.p);
            }
            else if (img1Pos == -200) {
                $("h1").text(data.slider[2].text.h1);
                $("p").text(data.slider[2].text.p);
            }
            else if (img1Pos == -300) {
                $("h1").text(data.slider[3].text.h1);
                $("p").text(data.slider[3].text.p);
            }
            else if (img1Pos == -400) {
                $("h1").text(data.slider[4].text.h1);
                $("p").text(data.slider[4].text.p);
            }
        });

    });

});