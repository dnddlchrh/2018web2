$(document).ready(function () {
        var num=1;

            function slide_box() {
                    $('.slide_box li').eq(num).animate({left:-1000},0);
                    $('.slide_box li').eq(num-1).animate({left:1000},500);
                    $('.slide_box li').eq(num).animate({left:0},500);
                    num++;
                    if(num>=3)
                        {
                            num=0;
                    }
                }
        setInterval(slide_box,2000);

        })