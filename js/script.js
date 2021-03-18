
$("#acquisti").keypress(function(event) {
  if (event.which == 13) {
    var ingrediente = $(this).val();
    var listaClone = $(".template li").clone();
    listaClone.prepend(ingrediente);
    $(".lista").append(listaClone);
  }
})
