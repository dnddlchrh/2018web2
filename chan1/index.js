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
    function popup() {
        $('.pop_box').click(function () {
            $('.del_box').css();
        });
        $('.del').click(function () {
            $('.del_box').fadeOut();
        });
    }
    function table_click() {
        $(".th_1").click(function () {
            $(".th_1 > a").css({color:"#4d87ef"});
            $(".th_2 > a").css({color:"black"});
            $('.table_box').css({display:'block'});
            $('#h_t').css({display:'none'});
        });
        $(".th_2").click(function () {
            $(".th_2 > a").css({color:"#4d87ef"});
            $(".th_1 > a").css({color:"black"});
            $('.table_box').css({display:'none'});
            $('#h_t').css({display:'block'});
        })

    }
    popup();
    table_click();
    setInterval(slide_box,2500);
    setInterval(pop_box_s,3500);

        })
