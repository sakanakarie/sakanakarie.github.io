// JavaScript Document
$(function(){
	
	$('a[href^=#]').click(function(){	
		var href = $(this).attr('href');
		var target = $(href == '#' || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body , html').animate({scrollTop:position},500,'swing');
		return false;
	});
	
	//var ch =$('.contents').height();
	/*$('.bg').css('height',ch+180+'px');
	$('footer').css('padding-top',ch-180+'px');*/
	
	/*$(window).on("resize", function(){
		if($(window).width() <= 768){
			var ch =$('.contents').height();
			$('.bg').css('height',ch+'px');
			$('footer').css('padding-top',ch-380+'px');
		}else{
			var ch =$('.contents').height();
			$('.bg').css('height',ch+180+'px');
			$('footer').css('padding-top',ch-180+'px');
		}
	});*/
	
	$('.cont-detail:nth-child(1) h2').css('padding',$('.cont-detail:nth-child(1)').height()/3+'px 0');
	$('.cont-detail:nth-child(2) h2').css('padding',$('.cont-detail:nth-child(2)').height()/3+'px 0');
	$('.cont-detail:nth-child(3) h2').css('padding',$('.cont-detail:nth-child(3)').height()/3+'px 0');
	
	
	
	/*console.log($('.cont-detail:nth-child(2)').height());
	//隕句�縺嶺ｽ咲ｽｮ隱ｿ謨ｴ
	var test;
	for(var i=0;i<=2;i++){
		test = $('.cont-detail:nth-child('+i+1+')').height() / 3;
		console.log(i+1+'='+test);
		$('.cont-detail:nth-child('+i+1+') h2').css('padding',test+'px 0');
	}*/
});