// targets the console in the chrome devloper tools,and logs a message
console.log("werking");

// standard jquery syntax
 // thats how we write jquery 
 //$(selector)action()
 // function() { code we want to execute goes in here}
 // target the document/dom and when it is redy (),run the function
$(document).ready( function(){


// code that happens
})
// top part thats how we write jquery
$(document).ready(function(){
	// the stuff that happend when the DOM is ready
	// target anything of id header and make it fade out,the o of out it has to be capital

	$("#header").fadeOut();
	// slide on click example
	// target the id of slidebtn and run the func when it is clicked
    // when i clicked the botton i want the h2 to slide
	$("#slidebtn").click(function(){
		// stuff that happend when #slidbtn is clicked
		// dont forget to put the capitol letter like T
		// we can but the any element after the $
		// class id main element or the whole body tag  
		$("#slideme").slideToggle();
	})
	// jquery animate()example
	// target the animatebtn when its double clicked run the func
$("#animatebtn").dblclick(function(){
	// target the #animateme div and animate it
	$("#animateme").animate({
		// make sure the second word has capital letter
		letterSpacing:"+=5px",
		fontSize:"+=40px",
		marginLeft:"+=50px",
		height:"+=500px"
	});
});

// scrollto.js plugin example
// click on a button
// run the func that scrolles to matching section
$("#scr1").click(function(){
	$(window).scrollTo( $(".sec1"),450)
})
$("#scr2").click(function(){
	$(window).scrollTo( $(".sec2"),450)
})
$("#scr3").click(function(){
	$(window).scrollTo( $(".sec3"),450)
})

})
