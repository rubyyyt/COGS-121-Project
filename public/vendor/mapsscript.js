var map;
var currCenter;

      function initMap() {
        // Create the map.
        var UCSD = {lat: 32.8843264, lng: -117.21523200000001};
        map = new google.maps.Map(document.getElementById('map'), {
          center: UCSD,
          zoom: 17
        });

        // Create the places service.
        var service = new google.maps.places.PlacesService(map);
        var getNextPage = null;
        var moreButton = document.getElementById('more');
        moreButton.onclick = function() {
          moreButton.disabled = true;
          if (getNextPage) getNextPage();
        };

        // Perform a nearby search.
        service.nearbySearch(
          {location: UCSD, radius: 1000, type: ['school']},
          function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            moreButton.disabled = !pagination.hasNextPage;
            getNextPage = pagination.hasNextPage && function() {
              pagination.nextPage();
            };
          });
        //Get current center
        currCenter = map.getCenter();

        //Use event listener for resize on window
        google.maps.event.addDomListener(window, 'resize', function() {
          //Set Center
          map.setCenter(currCenter);
        });
      }

      function createMarkers(places) {
        var bounds = new google.maps.LatLngBounds();
        var placesList = document.getElementById('places');

        for (var i = 0, place; place = places[i]; i++) {
          var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
          });

          var li = document.createElement('li');
          li.textContent = place.name;
          placesList.appendChild(li);

          bounds.extend(place.geometry.location);
        }
      map.fitBounds(bounds);
      }
