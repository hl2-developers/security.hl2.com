(function() {

	$(document).ready(function () {
   /**
    * Hide Toggler Menu on Item Click
    */
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
})();
