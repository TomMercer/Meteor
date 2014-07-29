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
  	conn = new Mongo();
	db = conn.getDB("myDatabase");
}
2

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
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
    
    function find_google_places(lat, lng ,dist){
    
    	var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius="+dist+"&key=AIzaSyARzaK0BJ6q9OoGN5hpzvd9g4AK_9gh6IU"
    	jQuery.ajax( url) //settings tag will need fixing
    	db.createCollection(gplaces)
    	
    }
    
    