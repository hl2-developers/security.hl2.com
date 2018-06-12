(function() {

	$(document).ready(function () {
   /**
    * Hide Toggler Menu on Item Click
    */
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });

    /**
     * Initialize youtube player
     */
    const player = new Plyr('#player', {
      autoplay: true,
      controls: [
        'play',
        'progress',
        'current-time',
        'captions',
        'pip',
        'airplay',
        'fullscreen'
      ],
      loop: {
        active: true
      }
    });
  });
})();
