$(ready);

function ready(){
	$('input').blur(function(){
		$(this).closest('.form').css("background-color", "#ffffff");
	});
	$('input').focus(function(){
		$(this).closest('.form').css("background-color", "#ff0000");
	});
});