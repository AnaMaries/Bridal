var document_height = $(document).height();
var window_width = $(window).width();
var window_height = $(window).height();
var window_top = $(window).scrollTop();
/*mobile*/
$(function() {
    $('.mobile_search').click(function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('.mobile_search_border').stop().css({ 'display': 'block' }).animate({ opacity: 1 }, 500);
        } else {
            $('.mobile_search_border').stop().css({ 'display': 'none' }).animate({ opacity: 0 }, 500);
        }
    });
    /**/

    /**/

    $('.FILTER_RESULTS').click(function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('.topmenu').stop().slideUp(500);
            $('.FILTER_RESULTS').stop().animate({ 'transition': ' all 0.3s' }, 500);
        } else {
            $('.topmenu').stop().slideDown(500);
            $('.FILTER_RESULTS').stop().animate({ 'transition': ' all 0.3s' }, 500);
        }
    });



    /*storelocator_contain.asp*/
    $('.pro_box').on('click', '.borderbtn', function(e) {
        e.preventDefault();
        var $pro = $(this);
        $pro.find('.dress_border2').stop().slideDown(500);

        $pro.find('.pro_list2').addClass('active').slideDown(500);
        $pro.find('.borderbtn').show().stop().animate({ 'transition': ' all 0.3s' }, 500);
        $pro.find('.borderbtn,.borderbtn_c').hide().stop().animate({ 'opacity': '0' }, 500);
    });

    
    $('.pro_box').each(function() {
        var $this = $(this);
        var elemH = $this.height();
        var elemT = $this.position().top;
        if (elemT < window_top + window_height || window_top < elemT + elemH) {
            var i = 0;
            $this.find('li').each(function() {
                $(this).delay(50 * i).queue(function() {
                    $(this).addClass('is-show');
                });
                i++;
            });
        }
    });

    /*sidemenu*/
    $(function() {
        $('a[id^="neckline"]').click(function() {
            $('.STYLE .sidemenu_nav').slideUp(300);
            if ($(this).attr('class') == 'active') {
                $(this).parent().next('.sidemenu_nav').slideUp(500);
                $(this).removeClass('active');
            } else {
                //$('.STYLE #STYLE_border a').removeClass('active');
                $('a[id^="neckline"]').removeClass('active');
                $(this).parent().next('.sidemenu_nav').slideDown(500);
                $(this).addClass('active');
            }
        });

    });
    $('.sidemenu_nav li').click(function() {
        $(this).children('a').toggleClass('active');
        $(this).children('.sidemenu_nav_close').toggle('fast');
        if ($(this).parent().find('.active').size() == 0)
            $(this).parent().prev().children('span.Clear').hide(300);
        else
            $(this).parent().prev().children('span.Clear').show(300);
    });
    $('span.Clear').click(function() {
        $(this).parent().next().children().find('.sidemenu_nav_close').hide(300);
        $(this).parent().next().children().find('a').removeClass('active');
        $(this).stop().hide(300);
    });
    /*storelocator_contain lightbox*/
    $('.Premier_Badges').click(function() {
        $('.lightbox_fix').fadeIn(500);
    });
    $('.close').click(function() {
        $('.lightbox_fix').fadeOut('fast');
    });
    $('.Platinum_Badges2').click(function() {
        $('.lightbox_fix1').fadeIn(500);
    });
    $('.close').click(function() {
        $('.lightbox_fix1').fadeOut('fast');
    });
});
/**/

// $(document).ready(function() {
//     $('#SMALL img').click(function() {

//         var N = $(this).attr('id').substr(2);

//         $('#BIG').attr('src', 'images/dressimg_pro' + N + '.jpg');

//     });

//     // æ›ç…§ç‰‡
//     $('#owl-demo').owlCarousel({
//         loop: true,
//         margin: 14,
//         nav: true,
//         responsive: {
//             300: {
//                 items: 2
//             },
//             350: {
//                 items: 3
//             },
//             500: {
//                 items: 5
//             },
//             600: {
//                 items: 6
//             }
//         }
//     });
//     // æ›é¡è‰²
//     $('.type').click(function() {
//         $('.type').removeClass('active');
//         $(this).addClass('active');
//     });
//     
// $('.favourite').on('click', function(e) {
//     e.preventDefault();
//     $(this).addClass('active');
// })
// });