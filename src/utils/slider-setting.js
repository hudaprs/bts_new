export default (slidesToShow) => {
  return {
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        },
        centerMode: true
      }
    ]
  }
}
