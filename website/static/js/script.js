$(function() {
    
    var s = Snap(775,250);
    s.node.id = 'main_logo';
    Snap.load("../../static/start.svg", onSVGLoaded);

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

        console.log(len1 + "is the length1");
        console.log(len2 + "is the length2");
        console.log(len3 + "is the length3");
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
        }, 1000);
        function animate()
        {
            welcome.animate({ strokeDashoffset: -600, opacity : 0 }, 1500 , mina.linear ,function hide_welcome()
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
            });
            }
        }
    }
   
    /*for header changes */
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            //$("nav").css("position","relative");
            $("nav").removeClass("navbar-fixed-top");
        } else {
            // upscroll code
            $("nav").addClass("navbar-fixed-top");
        }
        lastScrollTop = st;
    });
})
