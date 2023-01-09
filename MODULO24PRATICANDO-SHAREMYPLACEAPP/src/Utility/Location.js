
const GOOGLE_API_KEY = 'dummy'








export async function getAddressfromCoords(coords) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`)
  
    if(!response.ok) {
        throw new Error('Failed to fetch address. Please try again!');
    } 
    const data = await response.json();
    if(data.error_message) {
        throw new Error(data.error_message);
    }
    const address = data.results[0].formatted_address;
  }




export async function getCoordsFromAddress(address) { 
    const urlAddress = encodeURI(address);
    
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);
    if(!response.ok) {
        throw new Error('Failed to fetch coordinates. Please try again');
    } 

    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }

    console.log(data);
    const coordinates = data.results[0].geometry.location;
    return coordinates;
}





// Async functions always return a promise. If the return value of an async function
//  is not explicitly a promise, it will be implicitly wrapped in a promise.