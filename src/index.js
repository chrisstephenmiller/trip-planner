console.log("Terminal Wizard")

const markerMaker = require(`./marker`)

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiY3NtaWxsZXI0NTY3IiwiYSI6ImNqZXp0MzBhcDBmY2MycW85MHk2dmtmdDEifQ.XzwScHFRLHtzfn3EFQtbNw";

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const mapEl = document.getElementById('map')
const sidebar = document.getElementById('sidebar')

const finder = document.getElementById('finder')
finder.addEventListener('click', () => {
    mapEl.classList.toggle('active')
    sidebar.classList.toggle('active')

})

const marker1 = markerMaker([-87.6354, 41.8885], `activity`)
const marker2 = markerMaker([-87.6254, 41.8785], `hotel`)
const marker3 = markerMaker([-87.6154, 41.8685], `restaurant`)

marker1.addTo(map)
marker2.addTo(map)
marker3.addTo(map)