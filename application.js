$(ready);

//form validation function
function validation(e){
	while($(this).val()) === ''){
		e.preventDefault();
		//add icon to form
		$(this).append("<i class='fa fa-times'></i>");
	};
};

//main jquery function
function ready(jQuery){
	$("input").on('submit', validation(e));
};