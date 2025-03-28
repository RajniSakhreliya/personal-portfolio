(function ($) {
  "use strict";
  var NAY = {};
  var plugin_track = "assets/front/js/";
  $.fn.exists = function () {
    return this.length > 0;
  };
  NAY.PreLoad = function () {
    document.getElementById("loading").style.display = "none";
  };
  NAY.MenuClose = function () {
    $(".navbar-nav a").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };
  NAY.MenuTogglerClose = function () {
    $(".toggler-menu").on("click", function () {
      $(this).toggleClass("open");
      $(".header-left").stop().toggleClass("menu-open menu-open-desk");
    });
    $(".header-left a").on("click", function () {
      var toggle = $(".toggler-menu").is(":visible");
      if (toggle) {
        $(".header-left").removeClass("menu-open");
        $(".toggler-menu").removeClass("open");
      }
    });
  };
  NAY.HeaderFixd = function () {
    var HscrollTop = $(window).scrollTop();
    if (HscrollTop >= 100) {
      $("body").addClass("fixed-header");
    } else {
      $("body").removeClass("fixed-header");
    }
  };
  NAY.OnePage = function () {
    $(
      '.header-nav a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])'
    ).on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate({ scrollTop: target.offset().top - 60 }, 1000);
          return false;
        }
      }
    });
  };
  NAY.Counter = function () {
    var counter = jQuery(".counter");
    var $counter = $(".counter");
    if (counter.length > 0) {
      loadScript(plugin_track + "counter/jquery.countTo.js", function () {
        $counter.each(function () {
          var $elem = $(this);
          $elem.appear(function () {
            $elem.find(".count").countTo({ speed: 2000, refreshInterval: 10 });
          });
        });
      });
    }
  };
  NAY.Owl = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      loadScript(
        plugin_track + "owl-carousel/js/owl.carousel.min.js",
        function () {
          owlslider.each(function () {
            var $this = $(this),
              $items = $this.data("items") ? $this.data("items") : 1,
              $loop = $this.attr("data-loop") ? $this.data("loop") : true,
              $navdots = $this.data("nav-dots")
                ? $this.data("nav-dots")
                : false,
              $navarrow = $this.data("nav-arrow")
                ? $this.data("nav-arrow")
                : false,
              $autoplay = $this.attr("data-autoplay")
                ? $this.data("autoplay")
                : true,
              $autospeed = $this.attr("data-autospeed")
                ? $this.data("autospeed")
                : 5000,
              $smartspeed = $this.attr("data-smartspeed")
                ? $this.data("smartspeed")
                : 1000,
              $autohgt = $this.data("autoheight")
                ? $this.data("autoheight")
                : false,
              $CenterSlider = $this.data("center")
                ? $this.data("center")
                : false,
              $space = $this.attr("data-space") ? $this.data("space") : 30;
            $(this).owlCarousel({
              loop: $loop,
              items: $items,
              responsive: {
                0: {
                  items: $this.data("xx-items") ? $this.data("xx-items") : 1,
                },
                480: {
                  items: $this.data("xs-items") ? $this.data("xs-items") : 1,
                },
                768: {
                  items: $this.data("sm-items") ? $this.data("sm-items") : 1,
                },
                980: {
                  items: $this.data("md-items") ? $this.data("md-items") : 1,
                },
                1200: { items: $items },
              },
              dots: $navdots,
              autoplayTimeout: $autospeed,
              smartSpeed: $smartspeed,
              autoHeight: $autohgt,
              center: $CenterSlider,
              margin: $space,
              nav: $navarrow,
              navText: [
                "<i class='ti-arrow-left'></i>",
                "<i class='ti-arrow-right'></i>",
              ],
              autoplay: $autoplay,
              autoplayHoverPause: true,
            });
          });
        }
      );
    }
  };
  NAY.Gallery = function () {
    if (
      $(".lightbox-gallery").exists() ||
      $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()
    ) {
      loadScript(
        plugin_track + "magnific/jquery.magnific-popup.min.js",
        function () {
          if ($(".lightbox-gallery").exists()) {
          }
          if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
              disableOn: 700,
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false,
            });
          }
        }
      );
    }
  };
  NAY.ProgressBar = function () {
    $(".skill-bar .skill-bar-in").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr("aria-valuenow") + "%";
      if (bottom_window > bottom_object) {
        $(this).css({ width: progressWidth });
      }
    });
  };
  NAY.mTypeIt = function () {
    if ($("#type-it").exists()) {
      loadScript(plugin_track + "typeit-master/typeit.min.js", function () {});
    }
  };
  var _arr = {};
  function loadScript(scriptName, callback) {
    if (!_arr[scriptName]) {
      _arr[scriptName] = true;
      var body = document.getElementsByTagName("body")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptName;
      script.onload = callback;
      body.appendChild(script);
    } else if (callback) {
      callback();
    }
  }
  $(window).on("load", function () {
    NAY.PreLoad();
  });
  $(document).on("ready", function () {
    NAY.HeaderFixd(),
      NAY.OnePage(),
      NAY.Counter(),
      NAY.MenuClose(),
      NAY.MenuTogglerClose(),
      NAY.Gallery(),
      NAY.ProgressBar(),
      NAY.mTypeIt(),
      NAY.Owl(),
      $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
  });
  $(window).on("scroll", function () {
    NAY.ProgressBar(), NAY.HeaderFixd();
  });
  $(window).on("resize", function () {});
})(jQuery);
