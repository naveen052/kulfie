/*--Responsive nav---*/
$(function () {

      // TinyNav.js 1
      $('#nav').tinyNav({
        active: 'selected'
      });
      
      // TinyNav.js 2
      $('#nav2').tinyNav({
        header: 'Navigation' // Writing any title with this option triggers the header
      });

    });

/*--Responsive nav---*/

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
