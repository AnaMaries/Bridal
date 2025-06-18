var document_height = $(document).height();
var window_width = $(window).width();
var window_height = $(window).height();
var aaaalt = 0,
    bbb = 0,
    border2 = 0,
    footnum = 89;

//æœå°‹ç‰¹æ•ˆ
$('.search_c').click(function() {
    $('.search').show().addClass('active').stop().animate({ 'width': '205px' }, 300);
    $('.search_c').show().css({ 'display': 'none' });
});

//é›»è…¦ç‰ˆé¸å–®æ»¾è¼ªç½®é ‚
$(window).bind('scroll resize', function() {
    var $this = $(this);
    var $this_Top = $this.scrollTop();

    if ($this_Top < 118 && window_width > 1000) {
        $('.menu').css({ 'position': 'relative' });
    } else {
        $('.menu').css({ 'position': 'fixed', 'top': '0', 'z-index': '9' });
    }
}).scroll();

//æ‰‹æ©Ÿæ¿
$(function() {
    menushow();
    var navnum = 0;
    border2 = 25;
    $('.nav a.remain').click(function() {
        $('.nav_border').css({ 'display': 'none' }).stop().animate({ opacity: 0 }, 500);
        $('.nav a.remain').css({ 'display': 'none' });
        $('.navtitle').css({ 'border': ' none' });
        $('.navtitle a.menutitle').css({ 'display': 'block' }).stop().animate({ opacity: 1 }, 500);
        $('.navtitle').css({ 'border-bottom': '#e9eaea 1px solid' });
        bbb = window_height - (parseInt($('.nav_border2').attr('alt')) + border2);
        if (bbb < 0) bbb = 0;
        $('.nav_border2').css({ 'margin-bottom': '55px', 'margin-top': bbb + 'px' });
    });

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('#mobile_nav').stop().slideDown(); //.css({'top':'55px','position':'relative'});
            $('.centercon').css({ 'display': 'none' });
            if (aaaalt == 0) $('.nav_border2').attr('alt', $('#aaa').height());
            aaaalt = aaaalt + 1;
            bbb = window_height - (parseInt($('.nav_border2').attr('alt')) + border2);
            if (bbb < 0) bbb = 0;
            $('.nav_border2').css({ 'margin-bottom': '55px', 'margin-top': bbb + 'px' });
        } else {
            $('#mobile_nav').stop().slideUp(); //.css({'top':'-1000px','position':'relative'});
            $('.centercon').css({ 'display': 'block' });
            $('.nav_border').css({ 'display': 'none' }).stop().animate({ opacity: 0 }, 500);
            $('.nav a.remain').css({ 'display': 'none' });
            $('.navtitle').css({ 'border': ' none' });
            $('.navtitle a.menutitle').css({ 'display': 'block' }).stop().animate({ opacity: 1 }, 500);
            $('.navtitle').css({ 'border-bottom': '#e9eaea 1px solid' });
        }
    });

    //footnum=window_height-$('body').height()-2;if(footnum<89) footnum=89;
});

$(window).resize(function() { menushow(); });

function menushow() {
    border2 = 25;
    window_width = $(window).width();
    window_height = $(window).height();
    document_height = $(document).height();
    var $this = $(this);
    var $this_width = $(window).innerWidth();
    var window_scrollTop = $(window).scrollTop();
    var nav_bbheight = $('.nav').height();

    if (window_width > 1000) { //å¯¬åº¦å¤§æ–¼1000
        $('.topmenu').css({ 'display': 'block' });
        $('.navtitle').css({ 'border': 'none' });
        $('.FILTER_RESULTS').css({ 'display': 'none' });
        $('.menu').css({ 'position': 'relative' });
        $('#mobile_nav').css({ 'display': 'block' });
        $('.nav_border_menutitle').css({ 'display': 'none' });
        $('.navtitle').unbind('click').css({ 'border': 'none' });
        $('.hamburger').removeClass('is-active');
        $('.navtitle a.menutitle').css({ 'display': ' block' });
        $('.topmenu').css({ 'display': 'block' });
        $('.FILTER_RESULTS').css({ 'display': 'none' });
        $('.navtitle').hover(function() {
            var liwidth = 0,
                divwidth = $(this).children('.nav_border').css({ 'display': 'block' }).width();
            $('.navtitle').children('a').removeClass('active');
            $(this).children('a').addClass('active');
            for (var i = $(this).index() - 1; i < $('.navtitle').length; i++) {
                liwidth = liwidth + $('.navtitle').eq(i).width();
            }
            var totalwidth = parseInt(liwidth) - parseInt(divwidth);
            //alert(totalwidth)
            if (totalwidth < 0 && window_width <= 1200) {
                $(this).children('.nav_border').css({ 'left': totalwidth, 'display': 'block' }).stop().animate({ opacity: 1 }, 500);
            } else {
                $(this).children('.nav_border').css({ 'display': 'block' }).stop().animate({ opacity: 1 }, 500);
            }

        }, function() {
            $('.navtitle').children('a').removeClass('active');
            $(this).children('.nav_border').css({ 'display': 'none' }).stop().animate({ opacity: 0 }, 300);
        });
    } else {
        $('.FILTER_RESULTS').css({ 'display': 'block', 'margin-bottom': '0' });
        $('.hamburger').removeClass('is-active');
        $('.navtitle').unbind('mouseenter').unbind('mouseleave');
        $('#mobile_nav').css({ 'display': 'none' });
        $('.remain').css({ 'display': 'none' });
        $('.navtitle').css({ 'border-bottom': '#e9eaea 1px solid' });
        $('.navtitle').click(function() {
            $('.nav a.remain').css({ 'display': 'block' })
            $('.nav_border_menutitle').css({ 'display': 'block' });
            $('.navtitle a.menutitle').css({ 'display': 'none' });
            $('.navtitle').css({ 'border': ' none' });
            $('.nav_border2').css({ 'margin-bottom': '55px', 'margin-top': '0px' });
            var liwidth = 0,
                divwidth = $(this).children('.nav_border').css({ 'display': 'block' }).stop().animate({ opacity: 1 }, 500).width();
            bbb = window_height - (parseInt($('#aaa').height()));
            if (bbb < 0) bbb = 0;
            $('.nav_border2').css({ 'margin-bottom': '55px', 'margin-top': bbb + 'px' });
        });
    }

    //footnum=window_height-$('body').height()-2;if(footnum<89) footnum=89;
    //alert(window_height+','+$('body').height()+','+footnum)
    //$('footer').stop().css('height',footnum+'px');
}
/*topç‰¹æ•ˆ*/
var offset = 100,
    offset_opacity = 1200,
    scroll_top_duration = 1000,
    $back_to_top = $('.cd-top');
$(window).scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
    }
});
$back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0,
    }, scroll_top_duration);
});