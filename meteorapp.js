

if (Meteor.isClient) {
  Template.main.events({
'click #modal-trigger' : function (event){
  event.preventDefault();
  $('#modal-id').modal();
  console.log("Test");
}
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}