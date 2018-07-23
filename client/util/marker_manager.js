// class MarkerManager {
//   constructor(map) {
//     this.map = map;
//     this.markers = {};
//   }
//
//   createMarkerFromListing(listing) {
//     const marker = new window.google.maps.Marker({
//       position: {lat: listing.latitude, lng: listing.longitude},
//       map: this.map,
//       listingId: listing._id
//     });
//     console.log("marker",marker);
//
//     this.markers[marker.listingId] = marker;
//   }
//
//   updateMarkers(listings) {
//     listings.filter( listing => !this.markers[listing.id])
//       .forEach(newListing => this.createMarkerFromListing(newListing));
//   }
// }
//
// export default MarkerManager;

export default class MarkerManager {
  constructor(map, toys) {
    this.map = map;
    this.toys = toys;
    this.markers = {};
    this.infoWindows = [];
  }

  updateMarkers(toys) {
  const toyObj = {};

  toys.forEach((toy) => {
    toyObj[toy._id] = toy;
  });

  toys
    .filter(toy => !this.markers[toy._id])
    .forEach(newToy =>
      this.createMarker(newToy));

  let filter1 = Object.keys(this.markers);
  let filter2 = filter1.filter(toyId => !toyObj[toyId]);
  let filter3 = filter2.forEach((toyId) =>
    this.removeMarker(this.markers[toyId]));
  window.google.maps.event.addListener(this.map, "click", (e) => {
    this.infoWindows.forEach(win => win.close());
  });

  }

  createMarker(toy) {

    let contentString = '<div >' +
      `${toy.description}` + ' available at ' + `${toy.line1}`;
      '</div >';

    let infoWindow = new window.google.maps.InfoWindow({
      content: contentString
    });
    const position = new window.google.maps.LatLng(toy.latitude, toy.longitude);
    console.log(position);
    const marker = new window.google.maps.Marker({
      position,
      map: this.map,
      toyId: toy._id,
      visible: true
    });

    marker.addListener('click', () => {
      this.infoWindows.forEach(win => win.close());
      infoWindow.open(this.map, marker);
      this.infoWindows.push(infoWindow);
    });

    this.markers[toy._id] = marker;
  }

  removeMarker(marker) {

    this.markers[marker.toyId].setMap(null);
    delete this.markers[marker.toyId];
  }

  drop() {
    this.clearMarkers();
    for (let i = 0; i < this.toys.length; i++) {
      this.addMarkerWithTimeout({
        lat: this.toys[i].latitude,
        lng: this.toys[i].longitude
      }, i * 25, this.toys[i]);
    }
    window.google.maps.event.addListener(this.map, "click", (e) => {
      this.infoWindows.forEach(win => win.close());
    });
  }

  addMarkerWithTimeout(position, timeout, toy) {
    window.setTimeout( () => {

      let contentString = '<div >' +
        `${toy.name}` +
        '</div >';

      let infoWindow = new window.google.maps.InfoWindow({
        content: contentString
      });

      this.infoWindows.push(infoWindow);

      let marker = new window.google.maps.Marker({
        position: position,
        map: this.map,
        toyId: toy.id,
        icon: 'https://res.cloudinary.com/mwojick/image/upload/v1528938958/marker-32.ico',
        animation: window.google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });

      this.markers[toy.id] = marker;


    }, timeout);
  }

  clearMarkers() {
    let keys = Object.keys(this.markers);
    keys.forEach((k) => {
      this.markers[k].setMap(null);
    });
    this.markers = {};
  }
}
