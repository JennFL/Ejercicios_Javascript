let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa su edad");

switch (nombre, edad){
    case "Juan", "25":
        alert("Juan vive en Bogotá")
        break;
    case "Sofia", "30":
        alert("Sofia vive en Bucaramanga")
        break;
    case "Mathias", "18":
        alert("Mathias vive en Leticia")
        break;
    case "Anna", "22":
        alert("Anna vive en Cali")
        break;
    case "Johanna", "37":
        alert("Johanna vive en Santa Marta")
        break;
    default:
        alert("Esta persona no existe en nuestra base de datos, revisa que su nombre y edad sean correctos")
        break;
}