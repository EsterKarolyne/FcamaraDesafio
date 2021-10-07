
function TemaDark(){
    var divTheme = document.getElementById("tema")
    divTheme.classList.toggle("dark")
    document.body.classList.toggle("darkBody");
}

$(".carousel").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
  });

  function enviar(){
      window.alert("Seu agendamento foi concluido!")
  }