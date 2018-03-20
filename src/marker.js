const mapboxgl = require("mapbox-gl");

const markerMaker = (coordinatesArr, type) => {
    markerTypes = {
        activity: `http://i.imgur.com/WbMOfMl.png`,
        hotel: `http://i.imgur.com/D9574Cu.png`,
        restaurant: `http://i.imgur.com/cqR6pUI.png`
    }

    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${markerTypes[type]})`;
    return new mapboxgl.Marker(marker).setLngLat(coordinatesArr)
}

module.exports = markerMaker