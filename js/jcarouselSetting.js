(function($) {
    $(function() {
        $('.jcarousel').on('jcarousel:create jcarousel:reload', function() {
			var element = $(this),
				width = element.innerWidth();
			element.jcarousel('items').css('width', width + 'px');
		}).jcarousel();

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
