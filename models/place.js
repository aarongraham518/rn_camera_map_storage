export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat: 0.32, lng: 122.122}
    this.id = new Date().toString() + Math.random().toString();
  }
}
