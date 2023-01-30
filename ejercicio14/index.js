const meses = ['Enero','Febrero','Marzo','Abril','Marzo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const meseslargos = meses.filter (meses => meses.length>7).map(meses => meses.toUpperCase());
console.log(meseslargos);