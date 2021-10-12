const img = document.querySelector('#img-viewer');
const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#pic-form');
const lista = document.querySelector('#lista');

/*var flickr = Flickr.tokenOnly(
{
    api_key: "d49c9443bb420d32dfa8293e14bf1fec"
});*/

var settings = 
{
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=APIKEY&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
}

