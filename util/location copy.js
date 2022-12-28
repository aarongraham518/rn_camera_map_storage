const GOOGLE_API_KEY = 'AIzaSyClYxG-dLo';

export function getMapPreview(lat, lng){
    console.log('......getting preview......');
    console.log(lat, lng);
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=YOUR_API_KEY`
    return imagePreviewUrl;
}

