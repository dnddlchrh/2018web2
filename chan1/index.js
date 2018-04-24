$(document).ready(function () {
        var num=1;
        var num1=1;

            function slide_box() {
                    $('.slide_box li').eq(num).animate({left:-1000},0);
                    $('.slide_box li').eq(num-1).animate({left:1000},500);
                    $('.slide_box li').eq(num).animate({left:0},500);
                    num++;
                    if(num>=3)
                            num=0;
                }
    function popup() {
        $('.pop_box').click(function () {
            $('.del_box').fadeIn();
        });
        $('.del').click(function () {
            $('.del_box').fadeOut();
        });
    }
    popup();
    function pop_box_s() {
        $('#pop_box li').eq(num1).animate({left:-280},0);
        $('#pop_box li').eq(num1-1).animate({left:280},500);
        $('#pop_box li').eq(num1).animate({left:0},500);
        num1++;
        if(num1>=3)
        {
            num1=0;
        }
    }
        setInterval(slide_box,2500);
        setInterval(pop_box_s,3500);

        })