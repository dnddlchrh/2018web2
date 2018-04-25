$(document).ready(function () {
        var num=1;
        var num1=1;
        var dt=new Date();
        var nowyear = dt.getFullYear();
        var nowday = dt.getDate();
        var nowmonth = dt.getMonth()+1;
        var length=new Date(nowyear,nowmonth,0).getDate();

    function slide_box() {
        $('.slide_box li').eq(num).animate({left:-1000},0);
        $('.slide_box li').eq(num-1).animate({left:1000},500);
        $('.slide_box li').eq(num).animate({left:0},500);
        num++;
        if(num>=3)
            num=0;
    }
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
    function popup() {
        $('.pop_box').click(function () {
            $('.del_box').fadeIn();
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
    popup();
    table_click();
    setInterval(slide_box,2500);
    setInterval(pop_box_s,3500);
    console.log(length);
        })
