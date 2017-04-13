window.onload = window.onscroll = function() {
	var top = document.getElementById('top');
	var selltop = top.clientHeight;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop>selltop){
		top.style.background='rgba(69,126,205,0.9)'
	}else if(scrollTop<selltop){
		top.style.background='rgba(255,255,255,0.6)'
	}

	var ulp = document.getElementById('ulp')
	var oldX,oldY,newX,newY,speedX,speedY;
	var lso = 0;
	var divLefts;
	ulp.addEventListener('touchstart',function (e){
		ulp.style.transition = '0s';
		l = e.touches[0].clientX - this.offsetLeft;
		newX = e.touches[0].clientX;
	},false);
	ulp.addEventListener('touchmove',function (e){
		oldX = e.touches[0].clientX;
		ulp.style.left = e.touches[0].clientX - l + 'px';
		lso = e.touches[0].clientX;
	},false);
	ulp.addEventListener('touchend',function (e){
		zzz = oldX-newX;
		ulp.style.transition='1s';
		
        if(ulp.offsetLeft + zzz*3 >0){
           ulp.style.left =0;
        }
        if(ulp.offsetLeft + zzz*3 <-365){
           ulp.style.left =-365+'px';
        }
	},false);
}
//$(function() {
//	var n = 0;
//	var	timer = null;
//	var	time = null;
//	var	ow = $('.banner ul li').offset().width;
//	$('#ul').html($('#ul').html()+$('#ul').html()).width('1000%').find('li').width('10%');
//	$('.banner').on({
//			'swipeLeft':function(){
//				clearInterval(timer)
//				clearTimeout(time)
//				n++;
//				$('.banner').find('ul').animate({
//					'translateX':-n*10+'%'
//				},300,'ease',function(){
//					if(n == $('.banner').find('ul li').length/2){
//						$('.banner').find('ul').css({
//							'transform':'translateX(0)'
//						});
//						n = 0;
//					}
//				});
//				$('.banner').find('ol li').removeClass('active');
//				$('.banner').find('ol li').eq(n%$('.banner').find('ol li').length).addClass('active');
//				time = setTimeout(function(){
//				  timer=setInterval(move,1500)
//				},10)
//			},
//			'swipeRight':function(){
//				clearInterval(timer)
//				clearTimeout(time)
//				n--;
//				if(n == -1){
//					$('#ul').css({
//						'transform':'translateX(-50%)'
//					});
//					n = $('#ul li').length/2 -1;
//				};
//				$('#ul').animate({
//					'translateX':-n*10 + '%'
//				},300,'ease')
//				$('.banner').find('ol li').removeClass('active');
//				$('.banner').find('ol li').eq(n%$('ol li').length).addClass('active');
//				time = setTimeout(function(){
//				  timer=setInterval(move,1500)
//				},10)
//			}
//	})
//	$("#ul").bind("touchstart", function(e) {
//		clearInterval(timer);
//		$(this).css("-webkit-transition", "0s")
//		oldL = e.touches[0].clientX;
//		needL = e.touches[0].clientX - $(this).offset().left;
//	}, false)
//	$("#ul").bind("touchmove", function(e) {
//		e.preventDefault();
//		clearInterval(timer);
//		moveL = e.touches[0].clientX - needL;
//		newL = oldL - e.touches[0].clientX;
//		if(moveL > 0) {
//			$(this).css({
//				"-webkit-transform": "translateX(0px)"
//			});
//		} else {
//			$(this).css({
//				"-webkit-transform": "translateX("+moveL+"px)"
//			})
//		}
//	}, false)
//	$("#ul").bind("touchend", function(e) {
//		if(newL > 0 && newL < 35) {
//			$(this).css("-webkit-transition", ".5s")
//			$(this).css({
//				"-webkit-transform": "translateX("+(-n * ow)+"px)"
//			})
//		}
//		if(newL < 0 && -newL < 35) {
//			$(this).css("-webkit-transition", ".5s")
//			$(this).css({
//				"-webkit-transform": "translateX("+(-n * ow) + "px)"
//			})
//		}
//		clearInterval(timer);
//		timer=setInterval(move,2000)
//	}, false)
//
//
//
//	function move(){
//		n++;
//		$('.banner').find('ul').animate({
//			'translateX':-n*10+'%'
//		},300,'ease',function(){
//			if(n == $('.banner').find('ul li').length/2){
//				$('.banner').find('ul').css({
//					'transform':'translateX(0)'
//				});
//				n = 0;
//			}
//		});
//		$('.banner').find('ol li').removeClass('active');
//		$('.banner').find('ol li').eq(n%$('.banner').find('ol li').length).addClass('active');
//	}
//		clearInterval(timer)
//		timer = setInterval(move,2000);
//
//})