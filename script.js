var isOpen = false
function openMenu(){
    var menu = document.getElementById("menuMobile");
    
    if(isOpen == false){
        menu.style.left = 0;
        console.log(isOpen)
        isOpen = true;
    }else{
        menu.style.left = -110 +'%';
        console.log(isOpen)
        isOpen = false
    }
    
}

function TemaDark(){
    var divTheme = document.getElementById("tema")
    divTheme.classList.toggle("dark")
    document.body.classList.toggle("darkBody");
}

$(".carousel").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
  });

  function enviar(){
      window.alert("Seu agendamento foi concluido!")
  }

