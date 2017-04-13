window.onload = function(){
	document.documentElement.style.fontSize = innerWidth/16+'px';
	onresize = function(){
		document.documentElement.style.fontSize = innerWidth/16+'px';
	}
// nav
	var oNav = document.querySelectorAll('.nav>a');
	var oDiv = document.querySelectorAll('.dis');
	var oBody = document.querySelectorAll('body');
	for(var i=0;i<oNav.length;i++){
		oNav[i].index = i;
		oNav[i].onclick = function(){
			for(var i=0;i<oNav.length;i++){
				oNav[i].className = "";
				oDiv[i].style.display = "none"
			}
			oNav[this.index].className = "active";
			oDiv[this.index].style.display = "block"
			if(oDiv[2].style.display === "block"){
				oBody[0].className = "change"
			}else{
				oBody[0].className = ""
			}
		}
	}
		var n = 0;
		var	timer = null;
		var	time = null;
		var	ow = $('.banner ul li').offset().width;
		$('#ul').html($('#ul').html()+$('#ul').html()).width('1000%').find('li').width('10%');
		$('.banner').on({
				'swipeLeft':function(){
					clearInterval(timer)
					clearTimeout(time)
					n++;
					$('.banner').find('ul').animate({
						'translateX':-n*10+'%'
					},300,'ease',function(){
						if(n == $('.banner').find('ul li').length/2){
							$('.banner').find('ul').css({
								'transform':'translateX(0)'
							});
							n = 0;
						}
					});
					$('.banner').find('ol li').removeClass('white');
					$('.banner').find('ol li').eq(n%$('.banner').find('ol li').length).addClass('white');
					time = setTimeout(function(){
					  timer=setInterval(move,1500)
					},10)
				},
				'swipeRight':function(){
					clearInterval(timer)
					clearTimeout(time)
					n--;
					if(n == -1){
						$('#ul').css({
							'transform':'translateX(-50%)'
						});
						n = $('#ul li').length/2 -1;
					};
					$('#ul').animate({
						'translateX':-n*10 + '%'
					},300,'ease')
					$('.banner').find('ol li').removeClass('white');
					$('.banner').find('ol li').eq(n%$('ol li').length).addClass('white');
					time = setTimeout(function(){
					  timer=setInterval(move,1500)
					},10)
				}
		})
	$("#ul").bind("touchstart", function(e) {
		clearInterval(timer);
		$(this).css("-webkit-transition", "0s")
		oldL = e.touches[0].clientX;
		needL = e.touches[0].clientX - $(this).offset().left;
	}, false)
	$("#ul").bind("touchmove", function(e) {
		e.preventDefault();
		clearInterval(timer);
		moveL = e.touches[0].clientX - needL;
		newL = oldL - e.touches[0].clientX;
		if(moveL > 0) {
			$(this).css({
				"-webkit-transform": "translateX(0px)"
			});
		} else {
			$(this).css({
				"-webkit-transform": "translateX("+moveL+"px)"
			})
		}
	}, false)
	$("#ul").bind("touchend", function(e) {
		if(newL > 0 && newL < 35) {
			$(this).css("-webkit-transition", ".5s")
			$(this).css({
				"-webkit-transform": "translateX("+(-n * ow)+"px)"
			})
		}
		if(newL < 0 && -newL < 35) {
			$(this).css("-webkit-transition", ".5s")
			$(this).css({
				"-webkit-transform": "translateX("+(-n * ow) + "px)"
			})
		}
		clearInterval(timer);
		timer=setInterval(move,1500)
	}, false)



	function move(){
		n++;
		$('.banner').find('ul').animate({
			'translateX':-n*10+'%'
		},300,'ease',function(){
			if(n == $('.banner').find('ul li').length/2){
				$('.banner').find('ul').css({
					'transform':'translateX(0)'
				});
				n = 0;
			}
		});
		$('.banner').find('ol li').removeClass('white');
		$('.banner').find('ol li').eq(n%$('.banner').find('ol li').length).addClass('white');
	}
		clearInterval(timer)
		timer = setInterval(move,1500);

}


















