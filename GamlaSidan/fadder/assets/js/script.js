$(function(){
	
	var note = $('#note'),
		//ts = new Date(2012, 0, 1),
		ts = new Date(2014, 2, 17, 18, 00, 0)
		newYear = false;
	
	if((new Date()) > ts){
		
		note.html("<a href='http://www.dn.se/>Dags att anmäla sig!</a>");
		
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			var now = new Date();
			var diff = ts - now;
			message += days + " dag" + ( days==1 ? '':'ar' ) + ", ";
			message += hours + " timm" + ( hours==1 ? 'e':'ar' ) + ", ";
			message += minutes + " minut" + ( minutes==1 ? '':'er' ) + " and ";
			message += seconds + " sekund" + ( seconds==1 ? '':'er' ) + " <br />";
			
			

			if(diff <= 1000){
				//window.location="http://www.oru.se";
				$('#linkdiv').html("<a href='http://www.oru.se'>Anmäl dig här</a>");
			}
			note.html(message);
		}
	});
	
});
