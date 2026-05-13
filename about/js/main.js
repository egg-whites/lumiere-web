// $('.owl-carousel').owlCarousel({
// 	loop:true,
// 	margin:10,
// 	nav:true,
// })
		const nextIcon = '<img src="img/next.png" alt:"right">';
		const prevIcon = '<img src="img/prev.png" alt:"prev">';

           $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 57,
                nav: true,
                navText: [
                prevIcon,
                nextIcon
                ],
                
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })
       