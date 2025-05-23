//Gestion de libros de una Biblioteca
// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        // Agregar el nuevo libro a `biblioteca.libros`
        biblioteca.libros.push(nuevoLibro);
        console.log(`Nuevo libro agregado:${titulo}`);

        //Actualizar lista de libros
        mostrarLibros();
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        
        // Buscar el libro por título y cambiar la propiedad 'disponible' a nuevoEstado
        const nuevoLibro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if(nuevoLibro !== undefined && nuevoLibro !== null){
            nuevoLibro.disponible === nuevoEstado;
            console.log(`Disponibilidad actualizada: "${titulo}" está ahora ${nuevoEstado ? 'disponible' : 'prestado'}`)
        }else{
            console.log(`Libro no encontrado: "${titulo}"`);
        }
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);

//Otro ejemplo
mostrarLibros();
agregarLibro("Estudio en escarlata", "Sir Arthur Conan Doley", "Novela criminalística", true);
actualizarDisponibilidad("El principito", false);
actualizarDisponibilidad("1984", false);
