function JavaScriptFetch() 
{
    var script = document.createElement('script');
    
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;
    
    document.querySelector('head').appendChild(script);
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