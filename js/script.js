//Evento keypress legato all'input
$("#acquisti").keypress(function(event) {
  if (event.which == 13) {
    var ingrediente = $(this).val();

    //Clono il list item del template in jQuery
    var listaClone = $(".template li").clone();

    //Inseriamo il valore dell'input nell'elemento clonato
    listaClone.prepend(ingrediente);

    //Mostriamo l'elemento all'interno del documento
    $(".lista").append(listaClone);
    $(this).val("");
  }
})

//Rimozione elementi dalla lista
$(".lista").on("click", ".close", function () {
  $(this).parent().remove();
})
