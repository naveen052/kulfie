$(document).ready(function(){
  		$('.bxslider').bxSlider({
  			auto: true,
		mode: 'fade'
  		});

});

$(document).ready(function(){
	$("#tab1").click(function() {
		$('#image1').removeClass('display-off');
		$('#image2').addClass('display-off');
		$('#image3').addClass('display-off');
		$(this).addClass('active');
		$('#tab2').removeClass('active');
		$('#tab3').removeClass('active');		
		})  

	$("#tab2").click(function() {
		$('#image1').addClass('display-off');
		$('#image2').removeClass('display-off');
		$('#image3').addClass('display-off');
		$(this).addClass('active');
		$('#tab1').removeClass('active');
		$('#tab3').removeClass('active');			
		})  

	$("#tab3").click(function() {
		$('#image1').addClass('display-off');
		$('#image2').addClass('display-off');
		$('#image3').removeClass('display-off');
		$(this).addClass('active');
		$('#tab1').removeClass('active');
		$('#tab2').removeClass('active');			
		})  
});
