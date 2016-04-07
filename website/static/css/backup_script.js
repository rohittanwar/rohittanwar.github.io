$(function () {
    /* Animate the text with bouncing from up effect at splash screen*/
     $('.tlt')
      .fitText(3.2, { maxFontSize: 40 })
      .textillate({ 
        minDisplayTime: 300,
      	loop: true,
      	in:
      	{ 
      	effect:'bounceInDown',
      	delay: 70, 
      	shuffle: false },
      	out:
      	{
      	effect : 'tada',
      	delay:3
      	} });
      
      /* Get the main page with animation to screen*/
    $("#splash").bind('animationend webkitAnimationEnd', function() {
    var delay = 3000;       /* put delay as 3000 again */
    setTimeout(function() {
        $("#splash").remove();
        $("#content").addClass("content-animate");
        $("#content").css("visibility","visible");
        displaylogo();
    }, delay);
}); 
    /* Display the svg logo*/
    function displaylogo()
    {
      var delay = 350;
      setTimeout(function() {
        $("header").css("display","block");  
        $("#svglogo").css("display","block");
    }, delay);
    }

  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
  if(st > lastScrollTop){
       // downscroll code
       //$("nav").css("position","relative");
       $("nav").removeClass("navbar-fixed-top");
   } 
  else {
      // upscroll code
     $("nav").addClass("navbar-fixed-top");
   }
   lastScrollTop = st;
  });
})