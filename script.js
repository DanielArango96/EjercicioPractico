
var totalSueldo
var horasTrabajadas =Number(prompt("Ingrese horas trabajadas"))
var valorHora =Number (prompt("Ingrese el valor por hora"))
var  horaExtra=horasTrabajadas-40

if(horasTrabajadas > 40){
totalSueldo=(horasTrabajadas*40)+((valorHora*1.5)*horaExtra)
console.log ("Su salario es"+totalSueldo)
}