// 
//  main.js
//  <Changelink>
//  
//  Created by Wang on 2015-04-03.
//  Copyright 2015 Wang. All rights reserved.
// 

$(function() {
	var $liele = null,
		$liCur = null,
		curW = null,
		curP = null;

	//高度赋值，滚动配置
	$(".sec").css({"height":$(window).height()});
	
	//定义导航栏运行函数
	function whiteNav(){
		$('nav').removeClass('nav-ani blackColor').addClass('nav-ani whiteColor');
		$('nav a').removeClass('nav-ani navColorf').addClass('nav-ani navColorw');
	}
	function blackNav(){
		$('nav').removeClass('nav-ani whiteColor').addClass('nav-ani blackColor');
		$('nav a').removeClass('nav-ani navColorw').addClass('nav-ani navColorf');		
	}
	
	//Loading
	document.onreadystatechange = subSomething;
	function subSomething() 
	{ 
	  if(document.readyState == "complete")
	  {	
	  	setTimeout(function(){
			$('#loading').fadeOut(500,function(){
				$('#changelink').fadeIn(500,function(){
					if($('#home').css('display') == 'block' ){
						$.scrollify({
							section:".sec",
							easing: "easeInOutCirc",
					        scrollSpeed: 1100,
					        offset : 0,
					        scrollbars: false,
					        before:function(i,s) {
								$('.img-cloud img').removeClass('animated min02 fadeInUp');	   
								$('section').eq(i).find('.img-cloud img').addClass('animated min02 fadeInUp');
					        	if($('#home').css('display') == 'block' ){
						        	switch (i){
						        		case 0:
						        			whiteNav();
						        			break;
						        		case 1:
						        			blackNav();
						        			break;
						        		case 2:
						        			whiteNav();
						        			break;
						        		case 3:
						        			blackNav();
						        			break;
						        		case 4:
						        			whiteNav();
						        			break;
						        		default:
						        			whiteNav();
						        			break;
						        }
					        	$('#fp-nav li').eq(i).children('a').addClass('active').parent('li').siblings('li').children('a').removeClass('active');
					        	}		
					        },
					        after:function(i,s) {
					       }
						});						
					}

				});
			});
	  	},1000)
	  }
	} 
	//导航栏操作
	$('.nav-tab').click(function(){
		whiteNav();
		$('#home').fadeOut();
		var Index = $(this).index();
		
		$(this).addClass('cur').siblings('.nav-tab').removeClass('cur');
	 	$liele = $(this).children('a');
		$liCur = $(this);
		curW = $liele.width();
		curP = $liCur.position().left + ($liele.outerWidth() - $liele.width())/2;
		$('.tab').removeClass('current ').eq(Index).addClass('current');
		window.onmousewheel = function(){
			if($('#home').css('display')!='block'){
				setTimeout(function(){window.location.hash = '';},300);
			}
		}
	});
	
	//view control
	$('.navbar-brand').click(function(){
		window.location.hash = '#original';
		$.scrollify('move','#original');
		$('.nav-tab').removeClass('cur');
		curW = 0;
		curP = 0;
		$slider.animate({
		  "left":curP,
		  "width":curW
		});
		$('.tab').removeClass('current');
		$('#home').show();
	});	
	
	
	//weibo
	$('.weibo').hover(function(){
		$(this).attr('src','images/changelink/weibo2.png');
	},function(){
		$(this).attr('src','images/changelink/weibo.png');
	})
	//weixin
	$('.weixin').hover(function(){
		$(this).attr('src','images/changelink/weixin2.png');
		$('.wxqr').show();
	},function(){
		$(this).attr('src','images/changelink/weixin.png');
		$('.wxqr').hide();
	})
	
	//fp-nav control
	$('#fp-nav li').click(function(e){
		e.preventDefault();
		$.scrollify('move',$(this).children('a').attr('href'));
		$(this).children('a').addClass('active').parents('li').siblings('li').children('a').removeClass('active');
	})
	
	//nav-tab control
    var	  $slider = $(".curBg"),
		  $navBox = $(".slide-nav"),
		 $targetEle = $("ul.nav li a");
		$slider.animate({
		  "left":curP,
		  "width":curW
		});
		$targetEle.mouseenter(function () {
		  var $_parent = $(this).parent(),
			_width = $(this).width(),
			posL = $_parent.position().left + ($(this).outerWidth() - _width )/2;
		  $slider.stop(true, true).animate({
			"left":posL,
			"width":_width
		  }, "fast");
		});
		$navBox.mouseleave(function (cur, wid) {
		  cur = curP;
		  wid = curW;
		  $slider.stop(true, true).animate({
			"left":cur,
			"width":wid
		  }, "fast");
		});
	
});

