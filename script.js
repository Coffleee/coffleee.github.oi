$(document).ready(function(){
    $('.carusel__inner').slick({
    speed: 1500,
    adaptiveHeight: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="img/56.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/65.svg"></button>'
      });
  });
  (function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);