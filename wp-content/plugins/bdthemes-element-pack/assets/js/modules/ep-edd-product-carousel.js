/**
 * Start EDD product carousel widget script
 */

(function ($, elementor) {
  "use strict";

  var widgetEddProductCarousel = function ($scope, $) {
    var $eddProductCarousel = $scope.find(".ep-edd-product-carousel");

    if (!$eddProductCarousel.length) {
      return;
    }

    var $eddProductCarouselContainer = $eddProductCarousel.find(".swiper-container"),
      $settings = $eddProductCarousel.data("settings");

    const Swiper = elementorFrontend.utils.swiper;
    initSwiper();
    async function initSwiper() {
      var swiper = await new Swiper($eddProductCarouselContainer, $settings); // this is an example
      if ($settings.pauseOnHover) {
        $($eddProductCarouselContainer).hover(
          function () {
            this.swiper.autoplay.stop();
          },
          function () {
            this.swiper.autoplay.start();
          }
        );
      }
    }
  };

  jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/ep-edd-product-carousel.default",
      widgetEddProductCarousel
    );
  });
})(jQuery, window.elementorFrontend);

/**
 * End twitter carousel widget script
 */
