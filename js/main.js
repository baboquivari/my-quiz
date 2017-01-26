$(document).ready(function () {
	$("h1").click(function () {
  		console.log("clicked");	
   	});   
}); 
// SETUP TO SEE TEST IF CONSOLE BEING LOGGED WHEN H1 IS CLICKED

$('.mainButton').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 500);
});
// MAKES BOTTOM IMAGE BLINK











