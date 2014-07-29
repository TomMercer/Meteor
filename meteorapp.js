if (Meteor.isClient) {

    Template.main.events = {
        'click #modal-trigger': function(event) {
            event.preventDefault();
            $('#modal-id').modal();
            console.log("Test")
        }
    }
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log("go suck a nut.")
    });
}