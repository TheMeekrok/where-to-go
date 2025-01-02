$(function(){
	$(".log_in").hide();
	$(".register").hide();

	$("#registerButton").click(function(){
		$(".register").slideToggle(1000);
	});
	$("#enterButton").click(function(){
	$(".log_in").slideToggle(1000);
	});
});

$(function(){

});