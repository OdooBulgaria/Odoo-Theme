(function function() {
	'use strict';
	var website = openerp.website;
	website.openerp_website = {};
	website.snippet.animationRegistry.my_snippet = website.snippet.Animation.extend({

		selector : ".mt_simple_snippet",

		start: function function(){
			var h1 = this.$el.find(("h1");
			var h1_width = h1.width();
			h1.css('width',0);
			h1.animate( { width: h1_width }, 3000);
		},
	});
})();

//SIDE MENU SCRIPTS
 $(document).ready(function () {
            $('.menu-close-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '-250px', top: '-1000px' });
               
            });
            $('.menu-open-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '0px', top: '0px' });
               
            });
 });