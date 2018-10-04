$('nav a').click(function(e){       
    e.preventDefault();   //evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
      $('body,html').stop(true,true).animate({        
        scrollTop: $(strAncla).offset().top
      },1000);
    
  });


$('#fts').click(function() {                                                                                                                                      {

        var contador = 0;
   function cambio(){            
      contador += 1;

      if(contador == 1){
      $("#bp1").addClass("active");
      }

      else if(contador == 2){
      $("#bp2").addClass("active");
      }

      else if(contador == 3){
      $("#bp3").addClass("active");
      }

      else if(contador == 4){
      $("#bp4").addClass("active");
      }

      else if(contador == 5){
      $("#bp5").addClass("active");
      }

      else if(contador == 6){
      $("#bp6").addClass("active");
      }

      else if(contador == 7){
      $("#bp7").addClass("active");
      }
      else if (contador == 8){
                $("#barraDeProgreso li").removeClass("active");
                contador = 0;
              }

            }}
    setInterval(cambio, 1000);
});
$('#fts').click(function() {

    $('#maquinado').attr({'aria-expanded':'false'});
    $('#maquinado').removeClass('show');
    $('#ict').attr({'aria-expanded':'false'});
    $('#ict').removeClass('show');
});
$('#maq').click(function() {

    $('#ft').attr({'aria-expanded':'false'});
    $('#ft').removeClass('show');
    $('#ict').attr({'aria-expanded':'false'});
    $('#ict').removeClass('show');
});
$('#icts').click(function() {

    $('#maquinado').attr({'aria-expanded':'false'});
    $('#maquinado').removeClass('show');
    $('#ft').attr({'aria-expanded':'false'});
    $('#ft').removeClass('show');
});