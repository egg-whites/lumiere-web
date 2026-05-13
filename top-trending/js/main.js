const nextIcon = '<img src="img/next.png" alt="next">'
const prevIcon = '<img src="img/prev.png" alt="prev">'


$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin:10,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
          
        },
        1000:{
            items:5,

        }
    }
})


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })




// <script type="text/javascript">
//         $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
//     </script>