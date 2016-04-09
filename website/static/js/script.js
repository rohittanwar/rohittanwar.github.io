function displaylogo()
{
      /* Display the svg logo*/
      var delay = 350;
      setTimeout(function() {
        $("header").css("display","block");  
        $("#svglogo").css("display","block");
    }, delay);
}
function firsttext()
{
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
}
 function delayinlogo()
  {
     /* classess changes for svglogo*/
    var first = $("#delay-1");
      /*
      for(j=2;j<12;j++)
      {
          var second;
          console.log(first.css);
          first.bind('animationend webkitAnimationEnd', function() {
            second = $("#delay-"+j.toString());
            second.css("display:block");
          });
          first = second; 
      }
      */
  }
function mainpage()
 {
      /* Get the main page with animation to screen*/
    $("#splash").bind('animationend webkitAnimationEnd', function() {
    var delay = 0;       /* put delay as 3000 again */
    setTimeout(function() {
        $("#splash").remove();
        $("#container").addClass("content-animate");
        $("#container").css("visibility","visible");
        displaylogo();
        
    }, delay);
}); 
}
$(function () {
    firsttext();
    mainpage();
    
  /*for header changes */
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