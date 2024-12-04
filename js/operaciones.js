function realizarOperacion(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operacion = document.getElementById('Operaciones');
    const valorSeleccionado = operacion.value;

    switch(valorSeleccionado){
        case "Suma":
            alert("Suma de los numeros es: " +(num1+num2));
        break;

        case "Resta":
            alert("La resta de los numeros es: " + (num1-num2));
        break;

        case "Multiplicacion":
            alert("La multiplicación de los numeros es: " + (num1*num2));
        break;
        
        case "Division":
            if (num2 === 0){
                alert("No se puede dividir entre 0");
            }
            else{
                alert("La división de los numeros es: " + (num1/num2));
            }
        break;
    }

}