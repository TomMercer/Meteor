Template.main.events = {
'click #modal-trigger' : function (event){
  event.preventDefault();
  $('#modal-id').modal();
  console.log("Test")
}
}
