$( document ).ready(function() {
    var nav = $('#header-after');
    var pos = nav.offset().top;
    $(window).scroll(function() {
        var fix = ($(this).scrollTop() > pos) ? !0 : !1;
        nav.toggleClass("fix-nav", fix);
        $('body').toggleClass("fix-body", fix)
    })
});
var owl = $('.slider-02');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli-02'><</div>","<div class='right-sli-02'>></div>"],
        dots:false,
        nav:true,
    });
    var owl = $('.slider-03');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli'></div>","<div class='right-sli'></div>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });
    var owl = $('.slider-04');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli'></div>","<div class='right-sli'></div>"],
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }

    });
    var owl = $('.slider-05');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:0,
        navText: ["<div class='left-sli-05'><</div>","<div class='right-sli-05'>></div>"],
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
  


