
// var componentDidMount() =>
// {
//     fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' +Process.env.d49c9443bb420d32dfa8293e14bf1fec+'&tags=cats&per_page=10&page=1&format=json&nojsoncallback=1')
//     .then(function(response)
//     {
//         return response.json();
//     })
//     .then(function(j)
//     {
//         let picArray = j.photos.photo.map((pic) =>
//         {
//             var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
//             return
//             (
//                 <img alt="dogs" src={srcPath}></img>
//             )
//         })
//     })
// }

function JavaScriptFetch() 
{
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
    document.querySelector('head').appendChild(script)
}

function jsonFlickrFeed(data) 
{
    var image = "";
    
    data.items.forEach(function (element) 
    {
    image += "<img src=\"" + element.media.m + "\"/>";
    });

    document.getElementById("outputDiv").innerHTML = image;
}