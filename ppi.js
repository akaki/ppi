var usid;
var ssidx;
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

$(document).ready(function(){

$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />');

$('head').append('<script src="https://ppi.geogps.ge/services/bias/js.js" type="text/javascript" > </script>');
 


$('body').on("DOMSubtreeModified", function() {


		if($('#hb_mi_monitoring').length != 0 && usid !=  wialon.core.Session.getInstance().getCurrUser().$$user_accountId){
	
	
			usid  =	wialon.core.Session.getInstance().getCurrUser().$$user_accountId;
			ssidx = getQueryVariable('sid');
			
			$.post("https://ppi.geogps.ge/do.php",{"checkServices":"*","usr_id":usid},function(resp){
			var resp = JSON.parse(resp);
			
				//CSS
				$.each(resp.css,function(index,value){
				$('head').append(value);
				});
				//JS
				$.each(resp.js,function(index,value){
				$('head').append(value);
				});
			
			
			$('#horizontalbar').append(resp.menu);
			$('body').resize();
			});
		}
		

		
		
		
		

});


});


