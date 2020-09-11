/**
 * Template Name: Folio - v2.1.0
 * Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function ($) {
  ("use strict");

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51,
  });

  // Offset for Main Navigation
  $("#mainNav").affix({
    offset: {
      top: 100,
    },
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (!$(".subpage-nav").length) {
      if (scroll > 210) {
        $("#main-nav").slideDown(200);
      } else {
        $("#main-nav").slideUp(200);
      }
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $(".responsive").on("click", function (e) {
    $(".nav-menu").slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    var strings = $(".typed-items").text();
    strings = $(".typed-items").data("typed-person") + "," + strings;
    strings = strings.split(",");

    typed.typed({
      strings: strings,
      typeSpeed: 88,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $(".services-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 4,
      },
    },
  });

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);
