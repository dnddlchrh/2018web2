$(document).ready(function () {
        var num1=1;
        var current=0;
        var dt=new Date();
        var nowyear = dt.getFullYear();
        var nowday = dt.getDate();
        var nowmonth = dt.getMonth()+1;
        var length=new Date(nowyear,nowmonth,0).getDate();
        var max=$(".slide_box > li").length - 1, width = $(".slide_box > li > img").width();

    function navbox_color(){
        if(current==0){
            $("#subnav li").css({"background" : "none"})
            $("#subnav li").eq(current).css({"background" : "white"});
        }else if(current == 1){
            $("#subnav li").css({"background" : "none"})
            $("#subnav li").eq(current).css({"background" : "white"});
        }else if(current == 2){
            $("#subnav li").css({"background" : "none"})
            $("#subnav li").eq(current).css({"background" : "white"});
        }
    }
    navbox_color();
    $("#subnav li").click(function () {
        if($('.slide_box > li').is(':animated'))return false;
        var index = $(this).index();
        current = index;
        slide(current);
    });
    function slide_box() {
        if($('.slide_box > li').is(':animated'))return false;
        if(current >= max){
            current = 0;
            slide(current);
        }else if(current < max) {
            current++;
            slide(current);
        }
    }
    function slide(idx){
        navbox_color();
        $(".slide_box").animate({"margin-left" : -width * idx, "opacity" : 1}, 500);
    }
    setInterval(slide_box,3000);

    $('#next').click(function () {
        navbox_color(current);
        slide(current+1);
        if(current>=3)
            current=0;
    })


    function pop_box_s() {
        $('#pop_box li').eq(num1).animate({left:-285},0);
        $('#pop_box li').eq(num1-1).animate({left:285},500);
        $('#pop_box li').eq(num1).animate({left:0},500);
        num1++;
        if(num1>=3)
        {
            num1=0;
        }
    }
    function popup1() {
        $(".l_m > img").click(function () {
            $('#del_box1').fadeIn();
        });
        $('.del').click(function () {
            $('#del_box1').fadeOut();
        });
    }
    function popup2() {
        $("#login").click(function () {
            $('#del_box2').fadeIn();
        });
        $('.del').click(function () {
            $('#del_box2').fadeOut();
        });
    }
    function table_click() {
        $(".th_1").click(function () {
            $(".th_1").css({color:"#4d87ef"});
            $(".th_2 ").css({color:"black"});
            $('.table_box').css({display:'block'});
            $('#h_t').css({display:'none'});
        });
        $(".th_2").click(function () {
            $(".th_2").css({color:"#4d87ef"});
            $(".th_1 ").css({color:"black"});
            $('.table_box').css({display:'none'});
            $('#h_t').css({display:'block'});
        })

    }
    function right_button() {
        $('#r_bt').click(function () {
            nowday++;
            length=new Date(nowyear,nowmonth,0).getDate();
            if(nowday>length){
                nowmonth++;
                if(nowmonth>12){
                    nowyear++;
                    nowmonth = 1;
                }
                if(nowmonth<10)nowmonth="0"+nowmonth;
                nowday=1;
            }
            $('.m_box').text(nowday);
            $('.c_year_date').text(nowyear+"-"+nowmonth+"-"+nowday);
        });
    }
    function left_button(){
        $('#l_bt').click(function () {
            nowday--;
            length=new Date(nowyear,nowmonth-1,0).getDate();
            if(nowday<1){
                nowmonth--;
                if(nowmonth<1){
                    nowyear--;
                    nowmonth = 12;
                }
                if(nowmonth<10)nowmonth="0"+nowmonth;
                nowday=length;
            }
            $('.m_box').text(nowday);
            $('.c_year_date').text(nowyear+"-"+nowmonth+"-"+nowday);
        });
    }

    $('.m_box').text(nowday);
    if(nowmonth<10)nowmonth="0"+nowmonth;
    $('.c_year_date').text(nowyear+"-"+nowmonth+"-"+nowday);
    left_button();
    right_button();
    popup1();
    popup2();
    table_click();
    setInterval(pop_box_s,2500);


    console.log(length);
        })
