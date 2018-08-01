
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
      this.createMarker(newToy,newToy.img_url));

  let filter1 = Object.keys(this.markers);
  let filter2 = filter1.filter(toyId => !toyObj[toyId]);
  let filter3 = filter2.forEach((toyId) =>
    this.removeMarker(this.markers[toyId]));
  window.google.maps.event.addListener(this.map, "click", (e) => {
    this.infoWindows.forEach(win => win.close());
  });

  }

  createMarker(toy,image) {



      let contentString = '<div className="mapouterborder">' + '<div>' +
        `<img className="mapimage" src=${image}>` + '</img>' +
        '<div id="descprent">' +
        '<div id="toydescp">' + `${toy.description}`+'</div >' +
        '<div id="rentaldescp">' + '$'+`${toy.rental_rate}`+' per day' + '</div >' +
        '</div >' + '</div>' + '</div >';



    let infoWindow = new window.google.maps.InfoWindow({
      content: contentString,
    });
    const position = new window.google.maps.LatLng(toy.latitude, toy.longitude);

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



  clearMarkers() {
    let keys = Object.keys(this.markers);
    keys.forEach((k) => {
      this.markers[k].setMap(null);
    });
    this.markers = {};
  }
}
