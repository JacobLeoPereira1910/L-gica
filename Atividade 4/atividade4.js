/** Valor do Serviço
 * @author Leonardo Jacob
 */

 function
 
 
 
 let x,y,valor 
 x = parseFloat(frmRegra3.txtX.value.replace(",","."))
 y = parseFloat(frmRegra3.txtY.value.replace(",","."))
 valor = (x * y) / 100
 frmRegra3.txtResultado.value = valor.toFixed(2)
}