/* Document Ready JS part */

$(function() {
    $("html,body").animate({scrollTop: 0}, 100); //100ms for example
    var s = Snap();
    s.node.id = 'main_logo';
    Snap.load("../../static/start.svg", onSVGLoaded);
    $("#main_logo").appendTo("#my-svg-container");

    /* Javascript for SVG LOGO ie - Welcome->I am->ROHIT */

    function onSVGLoaded(f) {
        logo = f.selectAll(".logo");
        welcome = f.selectAll(".welcome");
        copies = f.select("#fivecopy");
        iam = f.selectAll(".iamc");

        len1 = 0;
        len2 = 0;
        len3 = 0;
        for(i=0;i<iam.length;i++)
        len1 += Snap.path.getTotalLength(iam[i].attr("d"));
        for(i=0;i<logo.length;i++)
        len2 += Snap.path.getTotalLength(logo[i].attr("d"));
        for(j=0;j<welcome.length;j++)
        len3 += Snap.path.getTotalLength(welcome[j].attr("d"));

        /*
        console.log(len1 + "is the length1");
        console.log(len2 + "is the length2");
        console.log(len3 + "is the length3");
        */
        var neg2 = -Math.abs(len2);
        var neg3 = -Math.abs(len3);
        
        s.append(f);

        copies.attr({
            visibility : "hidden"
        });
        iam.attr({
            display : "none"
        });
        setTimeout(function () {
            animate();
        }, 750);
        function animate()
        {
            welcome.animate({ strokeDashoffset: -600, opacity : 0 }, 1000 , mina.linear ,function hide_welcome()
            {
                welcome.attr({
                display : "none"
                });
                $(".iamc").fadeIn(1000);
                 setTimeout(function () {
                iam_fn();
                }, 1000);
            });
            function iam_fn()
            {
            iam.animate({ strokeDashoffset: -500 , opacity : 0}, 2000 , mina.easeout ,function hide_iam()
            {
                copies.attr({
                visibility : "visible"
                });
                $(".text-copy:eq(0)").bind('oanimationend animationend webkitAnimationEnd', function() { 
                    $("#desc").fadeIn(100);
                });
            });
            }
        }
    }
    /* Javascript for SVG LOGO ie - Welcome->I am->ROHIT ENDS */

   

    /*
   $('#toggle-btn').on('click', function(event) {
    
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});
*/
  
 /* JS for Navigation button */

   $("#nav-toggle").on('click',function(event){
    event.preventDefault();
    if($(this).hasClass("active"))
    {
        $(this).removeClass("active");
        $("#js-nav").velocity({marginLeft:"-135%"},{duration : 600},[5000,20]);
    }
    else
    {
        $(this).addClass("active");
        $("#js-nav").velocity({marginLeft:"0px"},{duration : 600},[5000,20]);
    }
  });

/* JS ends */ 

/* JS For Hover over items ie- Android,Software and Web */

$('.items').mouseenter(function () {
        $(this).find("h2").css("visibility","visible");
        }).mouseleave(function () {
      $(this).find("h2").css("visibility","hidden");
    });

/* Ends for items */
}); 

// Parallaxing + add class active on scroll
$(document).scroll(function () {
  

    var scroll = $(window).scrollTop();
    if(scroll>700)
    {
    console.log(scroll);
    
    }
    // Do something
  // parallaxing
  //var $movebg = $(window).scrollTop() * -0.3;
 // $('.portion').css('background-positionY', ($movebg) + 'px');
});
