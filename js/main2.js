$(document).ready(function () {
 	$("h1").click(function () {
  		console.log("clicked");			
 	});
});




$(document).ready(function() {
    $(".answers > ul > li").mouseenter(function() {
        $(this).fadeTo("fast", 0.25);
    	});
    		$(".answers > ul > li").mouseleave(function() {
        	$(this).fadeTo("fast", 1);
        	});
});
// CREATES EFFECT WHEN AN ANSWER IS HOVERED OVER





$('.ready').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 500);
});
// MAKES H1 BLINK




var questionsRight = 0;

document.getElementById("score").innerHTML = questionsRight;

$(document).ready(function() {

	$(".correct").click(function(){
	$(this).removeClass("answer correct");
	$(this).addClass("chosen-correct");
	$(this).siblings().removeClass("answer");
	$(this).siblings().removeClass("incorrect");
	$(this).siblings().addClass("unchosen");
	$(this).unbind();
	$(this).siblings().unbind();

		questionsRight += 1;

		document.getElementById("score").innerHTML = questionsRight;

	});





	$(".incorrect").click(function(){
	$(this).removeClass("answer incorrect");
	$(this).addClass("chosen-incorrect");
	$(this).siblings().removeClass("answer correct incorrect");
	$(this).siblings().addClass("unchosen");
	$(this).unbind();
	$(this).siblings().unbind();

	});

});
















