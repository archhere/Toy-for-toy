class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromListing(listing) {
    const marker = new window.google.maps.Marker({
      position: {lat: listing.latitude, lng: listing.longitude},
      map: this.map,
      listingId: listing._id
    });

    this.markers[marker.listingId] = marker;
  }

  updateMarkers(listings) {
    listings.filter( listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));
  }
}

export default MarkerManager;
