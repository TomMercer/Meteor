if (Meteor.isClient) {
<<<<<<< HEAD
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

    function set_current_location() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                add_location('My location',
                    position.coords.latitude,
                    position.coords.longitude);

                set_markers(new google.maps.LatLngBounds(), map);
            }, function error(err) {
                console.log('error: ' + err.message);
                set_markers(new google.maps.LatLngBounds(), map);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function find_google_places(){
    
    }
=======
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
>>>>>>> 9b759bc17eff89b2cc9e9c8c2d1d06f1bc017d5a
