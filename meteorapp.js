if (Meteor.isClient) {
<<<<<<< HEAD

    Template.main.events = {
        'click #modal-trigger': function(event) {
            event.preventDefault();
            $('#modal-id').modal();
            console.log("Test")
        }
    }
=======
  Template.main.events({
'click #modal-trigger' : function (event){
  event.preventDefault();
  $('#modal-id').modal();
  console.log("Test");
}
});
>>>>>>> 9858faa5db66bf7a3f5a379485476ecbc6bb1c9b
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log("go suck a nut.")
    });
}