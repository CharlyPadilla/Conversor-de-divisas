/* 
 Carlos Padilla Torres DSM406
 Miércoles 20 de septiembre 2023
 */

// Debemos definir una variable en la que almacenes la ruta del servidor.

function convertir() {
    let divisaConvertida = document.getElementById("divisaUno").value;
        let divisaAConvertir = document.getElementById("divisaDos").value;
        let importe = document.getElementById("inputImporte").value;
        let ruta = `http://localhost:8080/DSM406_ConversorDivisas/api/RestConversor/conversor?divisa1=${divisaConvertida}&divisa2=${divisaAConvertir}&importe=${importe}`;
        fetch(ruta).then(
        function (data) {
        console.log(data);
                return data.json();
        }
    ).then(
        function (jsonData) {
        console.log(jsonData.result);
                if (jsonData.result < 0){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Se ingresaron valores incorrectos!'
                    });
                    
                } else {
                    document.getElementById("txtResultadoConversion").innerHTML = "El resultado es: $" + (jsonData.result);
                }
            });
}
  