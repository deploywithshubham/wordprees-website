/**
 * Start EDD Category carousel widget script
 */

(function ($, elementor) {
  "use strict";

  var widgetEddCategoryCarousel = function ($scope, $) {
    var $eddCategoryCarousel = $scope.find(".ep-edd-category-carousel");

    if (!$eddCategoryCarousel.length) {
      return;
    }

    var $eddCategoryCarouselContainer = $eddCategoryCarousel.find(".swiper-container"),
      $settings = $eddCategoryCarousel.data("settings");

    const Swiper = elementorFrontend.utils.swiper;
    initSwiper();
    async function initSwiper() {
      var swiper = await new Swiper($eddCategoryCarouselContainer, $settings); // this is an example
      if ($settings.pauseOnHover) {
        $($eddCategoryCarouselContainer).hover(
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
      "frontend/element_ready/ep-edd-category-carousel.default",
      widgetEddCategoryCarousel
    );
  });
})(jQuery, window.elementorFrontend);

/**
 * End twitter carousel widget script
 */
