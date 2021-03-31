function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// functions for testimonials

var $slickEl = $(".center");
$slickEl.slick({
  centerMode: true,
  centerPadding: "200px",
  slidesToShow: 1,
  focusOnSelect: true,
  dots: true,
  infinite: true,
  prevArrow:
    '<span class="prev arrow"><i class="fas fa-chevron-left"></i></span>',
  nextArrow:
    '<span class="next arrow"><i class="fas fa-chevron-right"></i></span>',
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: true,
  speed: 1700,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: "400px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
