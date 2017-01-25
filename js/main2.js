$(document).ready(function () {
 	$("h1").click(function () {
  		console.log("clicked");			
 	});
});

$(document).ready(function() {
    $(".answers").mouseenter(function() {
        $(".answers").fadeTo("fast", 0.25);
    });
    $(".answers").mouseleave(function() {
        $(".answers").fadeTo("fast", 1);
        });
});

