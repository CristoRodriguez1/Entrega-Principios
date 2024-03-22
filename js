
var medellinCoordenadas = [6.244203, -75.581211];

var zoomMedellin = 12;

var mymap = L.map('mapa-leaflet').setView(medellinCoordenadas, zoomMedellin);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);

fetch('comunas_medellin.geojson')
    .then(response => response.json())
    .then(data => {

        var comunasLayer = L.geoJSON(data, {
            style: function(feature) {
                return { color: 'blue', weight: 1, fillOpacity: 0.5 };
            }
        }).addTo(mymap);

        comunasLayer.bindPopup(function(layer) {
            return 'Comuna: ' + layer.feature.properties.nombre_comuna;
        });
    })
    .catch(error => {
        console.error('Error al cargar los datos de comunas:', error);
    });

var datosCalidadAire = [
    { zona: "Zona 1", calidad: "Buena" },
    { zona: "Zona 2", calidad: "Regular" },
    { zona: "Zona 3", calidad: "Mala" }
];

function mostrarDatosEnSeccion(datos) {
    var datosContainer = document.getElementById('datos-container');
    datosContainer.innerHTML = '';
    datos.forEach(function(dato) {
        var divDato = document.createElement('div');
        divDato.innerHTML = '<strong>' + dato.zona + '</strong>: ' + dato.calidad;
        datosContainer.appendChild(divDato);
    });
}

function cargarDatosCalidadAire() {
    mostrarDatosEnSeccion(datosCalidadAire);
}

window.onload = cargarDatosCalidadAire;
