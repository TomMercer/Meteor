
if (Meteor.isClient) {
  Template.main.events({
    'click.btn-function' : function(event){
      set_current_location();
      function set_current_location() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var marker = new google.maps.Marker({
          position: myLatlng,
          title:"Hello World!"
      });
      marker.setMap(map);
    }, function error(err) {
      alert('error: ' + err.message);
      set_markers(new google.maps.LatLngBounds(), map);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
    },
    'click.drop-1' : function(event){
      
    },
    'click.drop-2' : function(event){
      
    },
    'click.drop-3' : function(event){
      
    },
    'keypress' : function(event){
      
        if (event.currentTarget.className.indexOf("search" > -1)) {
          if (event.keyCode === 13) {

            console.log("Test")
          };
        };
    }
  });
  Template.main.rendered = function() {
      $('#opener').on('mouseenter', function() {   
    var panel = $('#slide-panel');
    if (panel.hasClass("visible")) {
      panel.removeClass('visible').animate({'margin-right':'-300px'});
    } else {
      panel.addClass('visible').animate({'margin-right':'0px'});
    } 
    return false; 
  });
  }
  //conn = new Mongo();
  //db = conn.getDB("myDatabase");
}


if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}


function find_google_places(lat, lng, dist) {

  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=" + dist + "&key=AIzaSyARzaK0BJ6q9OoGN5hpzvd9g4AK_9gh6IU"
  jQuery.ajax(url) //settings tag will need fixing
  db.createCollection(gplaces)

}