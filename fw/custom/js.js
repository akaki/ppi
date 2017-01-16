var usr = 0;

$(document).ready(function(){

$('[id="usrLoc"]').selectpicker({
  size: 10,
  liveSearch: true
});

$('[id="usrRes"]').selectpicker({
  size: 10,
  liveSearch: true
});






$('#usrLoc').change(function(){

usr = $(this).val();


	if(usr != ""){
		
		$.post("proc.php",{"showUSR":usr,"serv":"localMain"},function(data){
		$('#col_config').html(data);
		
		
		
		
		$('.services').click( function(){
		  	
			var name = $(this).attr('name');

		  
		  $.post("proc.php",{"updateUSR":name,"action":1,"user":usr,"serv":"localMain"},function(data){ 
		  console.log(data);
		  });
		  
		   
		   
		});
				
		
		
		})
		

	}




});





$('#usrRes').change(function(){

usr = $(this).val();


	if(usr != ""){
		
		$.post("proc.php",{"showUSR":usr,"serv":"localRes"},function(data){
		$('#col_config').html(data);
		
		
		
		
		$('.services').click( function(){
		  	
			var name = $(this).attr('name');

		  
		  $.post("proc.php",{"updateUSR":name,"action":1,"user":usr,"serv":"localRes"},function(data){ 
		  console.log(data);
		  });
		  
		   
		   
		});
				
		
		
		})
		

	}




});













$('#save').click(function(){


})


});
