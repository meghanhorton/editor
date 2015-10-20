function saveEdits(attr,value) {
	localStorage.setItem = (attr,value);
	console.log(localStorage);
	// //save the content to local storage
	// localStorage.userEdits = $("#edit").html();
	// //write a confirmation to the user
	// $("#submit").attr("value","Saved");
}

function checkEdits(attr,value) {
	if(localStorage!=null){
		$("td").each(function(){
			if($(this).attr("mc:edit")){
				console.log(localStorage.getItem($(this).attr("mc:edit")));
				if(localStorage.getItem($(this).attr("mc:edit")) != null){
					$(this).html( localStorage.getItem($(this).attr("mc:edit")) );
				}
				
			}
		})
	}
	//find out if the user has previously saved edits
	// if(localStorage!=null)
	// 	$("#edit").html(localStorage.userEdits);
}

function makeEditable(){
	$("td").each(function(){
		if($(this).attr("mc:edit")){
			$(this).attr('contenteditable',true);
		}
	})
}

// on load, check edits for previous
// $(window).load( checkEdits() );
$(document).ready(function(){
	// Make all editable
	makeEditable();

	// On Save
	$("#submit").click(function(){
		$("td").each(function(){
			if($(this).attr("mc:edit")){
				saveEdits($(this).attr("mc:edit"),$(this).html());
			}
		})
	})
});


$(window).load(function(){
	checkEdits();
	// $("td").each(function(){
	// 	if($(this).attr("mc:edit")){
	// 		checEdits($(this).attr("mc:edit"),$(this).html());
	// 	}
	// })
})