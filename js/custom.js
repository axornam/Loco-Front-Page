// Show and Hide Menu
$(document).ready(function () {
  "use strict";

  $(window).scroll(function () {
    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0)",
      });
    } else {
      $(".navbar").css({
        "margin-top": "0px",
        opacity: "1",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59, 59, 0.7)",
        "border-color": "#444",
      });

      $(".navbar-brand").css({
        height: "35px",
        "padding-top": "0",
      });

      $(".navbar-nav > li > a").css({
        "padding-top": "15px",
      });
    }
  });
});

// Add Smooth Scrolling
$(document).ready(function () {
  "use strict";

  $(".nav-item, #scroll-to-top").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );

        return false;
      }
    }
  });
});

// Active menu Item on Click
$(document).ready(function () {
  "use strict";

  $(".navbar-nav li a").click(function () {
    "use strict";
    $(".navbar-nav li a").parent().removeClass("active");

    $(this).parent().addClass("active");
  });
});

// Highlight Menu Item on Scroll
$(document).ready(function () {
  "use strict";

  $(window).scroll(function () {
    "use strict";

    $("section").each(function () {
      "use strict";

      var bb = $(this).attr("id");
      console.log(bb);
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if (
        $(window).scrollTop() > grttop &&
        $(window).scrollTop() < grttop + hei
      ) {
        $(".navbar-nav li a[href='#" + bb + "']")
          .parent()
          .addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']")
          .parent()
          .removeClass("active");
      }
    });
  });
});

// Add automatice padding size to header section
$(document).ready(function () {
  "use strict";

  setInterval(function () {
    "use strict";
    let winHeight = $(window).height();
    let containerHeight = $(".header-container").height();
    let padTop = winHeight - containerHeight;
    $(".header-container").css({
      "padding-top": Math.round(padTop / 2) + "px",
      "padding-bottom": Math.round(padTop / 2) + "px",
    });
  }, 10);
});

// Add BxSlider function
$(document).ready(function () {
  $(".bxslider").bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50,
  });
});

// Add Counter Animation to Numbers
$(document).ready(function () {
  $(".counter-number").counterUp({ delay: 10, time: 2000 });
});
