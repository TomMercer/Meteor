if (Meteor.isClient) {
  Template.main.events({
    'click #modal-trigger': function(event) {
      event.preventDefault();
      $('#modal-id').modal();
    }
  });
  Template.main.rendered = function() {
    $('#modal-id').modal();
  }
}


if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}