
//1. Autenticación:



//2. Carga de valores totales de API
//direccion API h​ttp://localhost:3000/api/total​

document.getElementById("cBtn").addEventListener("click", function() {

  fetch('./Data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

});

//4. Aqui debemos definir la interface para conectar variables con datos y arrays.


//5. Generación dinamica de Grafico de barras.

/*
var grfCovid = document.getElementById("graficoCovid");
//autoexplicativo de datos por paises. Arrays tienen que cargar id expecificos con metodo map o loop for.
var activos = {
label: 'activos',
data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],//datos de JSON API
backgroundColor: 'rgba(0, 99, 132, 0.6)',
borderWidth: 0,
yAxisID: "y-axis-density"
};

var confirmados = {
label: 'confirmados',
data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],//Datos JSON API
backgroundColor: 'rgba(99, 132, 0, 0.6)',
borderWidth: 0,
yAxisID: "y-axis-gravity"
};

var muertos = {
  label: 'muertos',
  data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],//Datos JSON API
  backgroundColor: 'rgba(99, 132, 0, 0.6)',
  borderWidth: 0,
  yAxisID: "y-axis-gravity"
};

var recuperados = {
  label: 'recuperados',
  data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],//Datos JSON API
  backgroundColor: 'rgba(99, 132, 0, 0.6)',
  borderWidth: 0,
  yAxisID: "y-axis-gravity"
};


var paises = {
labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],//Datos JSON API
datasets: [activos, confirmados, muertos, recuperados]//Array de datos por index que estan en labels.
};

var chartOptions = {
scales: {
xAxes: [{
  barPercentage: 1,
  categoryPercentage: 0.6
}],
yAxes: [{
  id: "y-axis-density"
}, {
  id: "y-axis-gravity"
}]
}
};

var barChart = new Chart(grfCovid, {
type: 'bar',
data: paises,
options: chartOptions
});

*/