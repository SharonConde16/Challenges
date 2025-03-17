// Lista para almacenar nombres de amigos
let amigos = [];

// Variable para rastrear si sorteo ha sido realizado
let sorteoRealizado = false;

// Expresión regularvalidar nombres
const nombreRegex = /^[A-Za-z\s]{3,}$/;

// Función agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    
    if (sorteoRealizado) {
        alert("El sorteo ha sido realizado. Por favor, reinicia la lista para agregar nuevos participantes.");
        input.value = ""; // Limpiar campo de entrada
        return;
    }

    let nombre = input.value.trim();

    if (!nombreRegex.test(nombre)) {
        alert("Por favor, ingresa nombre válido que contenga solo letras y sea de al menos 3 caracteres.");
        input.value = ""; // Limpiar campo de entrada
        return;
    }

    // Agregar nombre a la lista y actualizar la visualización
    amigos.push(nombre);
    actualizarListaNombres();
    
    input.value = ""; // Limpiar campo de entrada
}

// Función actualizar lista de nombres en página
function actualizarListaNombres() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((nombre) => {
        let listItem = document.createElement("li");
        listItem.textContent = nombre; // Eliminar numeración añadida
        listaAmigos.appendChild(listItem);
    });
}

// Función realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de nombres está vacía.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[randomIndex];

    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es ${amigoSeleccionado}</li>`;
    sorteoRealizado = true; // Indicar que sorteo ha sido realizado
}

// Función reiniciar la lista de amigos
function reiniciarLista() {
    amigos = []; // Vaciar array de nombres
    actualizarListaNombres(); // Actualizar vista de la lista
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    sorteoRealizado = false; // Restablecer la variable
}
