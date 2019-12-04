jQuery.noConflict();
jQuery(document).ready(function() {
  jQuery("#mycarousel").carousel({ interval: 2000 });
  jQuery("#carouselButton").click(function() {
    if (
      jQuery("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      jQuery("#mycarousel").carousel("pause");
      jQuery("#carouselButton")
        .children("span")
        .removeClass("fa-pause");
      jQuery("#carouselButton")
        .children("span")
        .addClass("fa-play");
    } else if (
      jQuery("#carouselButton")
        .children("span")
        .hasClass("fa-play")
    ) {
      jQuery("#mycarousel").carousel("cycle");
      jQuery("#carouselButton")
        .children("span")
        .removeClass("fa-play");
      jQuery("#carouselButton")
        .children("span")
        .addClass("fa-pause");
    }
  });

  jQuery.noConflict();
  jQuery(document).ready(function() {
    jQuery("#loginButton").click(function() {
      jQuery("#loginModal").modal("show");
    });
  });
  jQuery(document).ready(function() {
    jQuery("#cancelButton").click(function() {
      jQuery("#loginModal").modal("hide");
    });
  });
  jQuery(document).ready(function() {
    jQuery("#xButton").click(function() {
      jQuery("#loginModal").modal("hide");
    });
  });
  jQuery(document).ready(function() {
    jQuery("#reserveButton").click(function() {
      jQuery("#reserveTable").modal("show");
    });
  });
  jQuery(document).ready(function() {
    jQuery("#cancelReserve").click(function() {
      jQuery("#reserveTable").modal("hide");
    });
  });
  jQuery(document).ready(function() {
    jQuery("#xReserve").click(function() {
      jQuery("#reserveTable").modal("hide");
    });
  });
});
