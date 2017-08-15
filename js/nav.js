$(function(){
	var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
    });
	
	var height = $('.swiper-container2 .swiper-slide').height();
	$('.slb_nav0').click(function(){
		$('html,body').animate({scrollTop: 0}, 600);
		$('.swiper-container2 .swiper-wrapper').css('transform','translate3d(0, 0, 0)');
	})
	$('.slb_nav1').click(function(){
		$('html,body').animate({scrollTop: $('.navCon-02').offset().top-height}, 600);
	})
	$('.slb_nav2').click(function(){
		$('html,body').animate({scrollTop: $('.navCon-03').offset().top-height}, 600);
	})
	$('.slb_nav3').click(function(){
		$('html,body').animate({scrollTop: $('.navCon-04').offset().top-height}, 600);
	})
	$('.slb_nav4').click(function(){
		$('html,body').animate({scrollTop: $('.navCon-06').offset().top-height}, 600);
//		$('.swiper-container2 .swiper-wrapper').css('transform','translate3d(' + (- $('.swiper-container2 .swiper-slide:last-child').width() + $('.swiper-container2 .swiper-slide:last-child').width()*(0.3)) + 'px, 0px, 0px)');
	})
	
	$(window).scroll(function(){
		if($(window).scrollTop() < $('.banner').height()){
			$('.swiper-container2').removeClass('swiper-container2s');
			$('.swiper-container2 .swiper-wrapper').css('transform','translate3d(0, 0, 0)');
		}
		if($(window).scrollTop() >= $('.swiper-container2').offset().top){
			$('.swiper-container2').addClass('swiper-container2s');
		}
		if($(window).scrollTop() >= $('.swiper-container2').offset().top){
			$('.slb_nav0').addClass('cuur').siblings().removeClass('cuur');
			$('.swiper-container2 .swiper-wrapper').css('transform','translate3d(0, 0, 0)');
		}
		if($(window).scrollTop() >= $('.navCon-02').offset().top - 50){
			$('.slb_nav1').addClass('cuur').siblings().removeClass('cuur');
		}
		if($(window).scrollTop() >= $('.navCon-03').offset().top - 50) {
			$('.slb_nav2').addClass('cuur').siblings().removeClass('cuur');
		}
		if($(window).scrollTop() >= $('.navCon-04').offset().top - 50) {
			$('.slb_nav3').addClass('cuur').siblings().removeClass('cuur');
		}
		if($(window).scrollTop() >= $('.navCon-05').offset().top - 50) {
			$('.slb_nav4').addClass('cuur').siblings().removeClass('cuur');
//			$('.swiper-container2 .swiper-wrapper').css('transform','translate3d(' + (- $('.swiper-container2 .swiper-slide:last-child').width() + $('.swiper-container2 .swiper-slide:last-child').width()*(0.3)) + 'px, 0px, 0px)');
		}
	})
	//动画
	$(".navCon-01").scrollScreen({callback:function(){
        $(".navCon-01").each(function(){
        	$(".navCon-01 h3").addClass('animated slideInLeft');
            $(".navCon-01 dl").addClass('animated slideInRight');
            $('.navCon-01 dl:nth-of-type(2)').addClass('delay1');
            $('.navCon-01 dl:nth-of-type(3)').addClass('delay2');
        });
    }})
	$(".navCon-02 h3").scrollScreen({callback:function(){
        $(".navCon-02 h3").each(function(){
        	$(this).addClass('animated fadeInLeft');
        });
    }})
	$(".navCon-02 dl").scrollScreen({callback:function(){
        $(".navCon-02 dl").each(function(){
        	$(this).addClass('animated fadeInRight');
        	$('.navCon-02 dl:nth-of-type(2)').addClass('delay1');
            $('.navCon-02 dl:nth-of-type(3)').addClass('delay2');
        });
    }})
	$(".navCon-03 .no-question").scrollScreen({callback:function(){
        $(".navCon-03 .no-question").each(function(){
        	$(this).addClass('animated zoomIn');
            $(".navCon-03 span:first-child").addClass('animated fadeInDown');
            $(".navCon-03 span:nth-of-type(1)").addClass('animated fadeInDown');
            $(".navCon-03 span:nth-of-type(2)").addClass('animated fadeInRight');
            $(".navCon-03 span:nth-of-type(3)").addClass('animated fadeInRight');
            $(".navCon-03 span:nth-of-type(4)").addClass('animated fadeInLeft');
            $(".navCon-03 span:nth-of-type(5)").addClass('animated fadeInLeft');
        });
    }})
	$(".navCon-04 h3").scrollScreen({callback:function(){
        $(".navCon-04 h3").each(function(){
        	$(this).addClass('animated fadeInLeft');
        });
    }})
	$(".navCon-04 ul li:nth-of-type(1)").scrollScreen({callback:function(){
        $(".navCon-04 ul li:nth-of-type(1)").each(function(){
        	$(this).find('img').addClass('animated zoomIn');
        	$(this).find('.btn').addClass('animated zoomIn delay2');
        	$(this).find('h4').addClass('animated fadeInDown');
        	$(this).find('p').addClass('animated fadeInDown');
        });
    }})
	$(".navCon-04 ul li:nth-of-type(2)").scrollScreen({callback:function(){
        $(".navCon-04 ul li:nth-of-type(2)").each(function(){
        	$(this).find('img').addClass('animated zoomIn');
        	$(this).find('.btn').addClass('animated zoomIn delay2');
        	$(this).find('h4').addClass('animated fadeInDown');
        	$(this).find('p').addClass('animated fadeInDown');
        });
    }})
	$(".navCon-04 ul li:nth-of-type(3)").scrollScreen({callback:function(){
        $(".navCon-04 ul li:nth-of-type(3)").each(function(){
        	$(this).find('img').addClass('animated zoomIn');
        	$(this).find('.btn').addClass('animated zoomIn delay2');
        	$(this).find('h4').addClass('animated fadeInDown');
        	$(this).find('p').addClass('animated fadeInUp');
        });
    }})
	$(".navCon-04 ul li:nth-of-type(4)").scrollScreen({callback:function(){
        $(".navCon-04 ul li:nth-of-type(4)").each(function(){
        	$(this).find('img').addClass('animated zoomIn');
        	$(this).find('.btn').addClass('animated zoomIn delay2');
        	$(this).find('h4').addClass('animated fadeInDown');
        	$(this).find('p').addClass('animated fadeInUp');
        });
    }})
	$(".navCon-05").scrollScreen({callback:function(){
        $(".navCon-05").each(function(){
        	$(".navCon-05 h3").addClass('animated fadeInLeft');
            $(".navCon-05 li .icon").addClass('animated fadeInLeft');
            $(".navCon-05 li div:last-child").addClass('animated fadeInRight');
        });
    }})
	$(".navCon-06").scrollScreen({callback:function(){
        $(".navCon-06").each(function(){
        	$(".navCon-06 h3").addClass('animated fadeInLeft');
            $(".navCon-06 dl:nth-of-type(1) dt").addClass('animated fadeInDown');
            $(".navCon-06 dl:nth-of-type(1) dd").addClass('animated fadeInDown delay1');
            $(".navCon-06 dl:nth-of-type(2) dt").addClass('animated fadeInDown delay2');
            $(".navCon-06 dl:nth-of-type(2) dd").addClass('animated fadeIn delay3');
            $(".navCon-06 dl:nth-of-type(3) dt").addClass('animated fadeInDown delay4');
            $(".navCon-06 dl:nth-of-type(3) dd").addClass('animated fadeIn delay5');
        });
    }})
})

