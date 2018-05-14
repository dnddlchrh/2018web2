$(document).ready(function () {
        var num=1;
        var num1=1;
    var slide_index = 0;
        var dt=new Date();
        var nowyear = dt.getFullYear();
        var nowday = dt.getDate();
        var nowmonth = dt.getMonth()+1;
        var length=new Date(nowyear,nowmonth,0).getDate();


    function slide_box() {
        if($('.slide_box > li').is(':animated'))return false;
        $('.slide_box li').eq(num).animate({left:-1000},0);
        $('.slide_box li').eq(num-1).animate({left:1000},500);
        $('.slide_box li').eq(num).animate({left:0},500);

        num++;
        if(num>=3)
            num=0;
    }
    $('#left_button').click(function () {
        console.log(333);
        if($('.slide_box > li').is(':animated'))return false;
        slide_box(num-1);
        if(num>=3)
            num=1;

    })
    $('#right_button').click(function () {
        if($('.slide_box > li').is(':animated'))return false;
        slide_box(num+1);
        if(num>=3)
            num=1;

    });

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
    var slide1=setInterval(slide_box,2500);
    console.log(length);
        })
