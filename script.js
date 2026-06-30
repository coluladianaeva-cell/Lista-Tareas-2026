/* Referencias*/

const tareaEntrada = document.getElementById('tarea-entrada');
const botonAgregar = document.getElementById('boton-agregar');
const mensaje = document.getElementById('mensaje');

/* Escuchadores */

botonAgregar.addEventListener('click', agregarTarea);

/* Funcion agrgar Tarea */

function agregarTarea() {
  // Generamos una variable para evaluar si hay texto o no

  const texto = tareaEntrada.value.trim();

  // Evaluar la constante texto

  if(texto) {
    tareaEntrada.value= '';
    console.log('tarea creada correctamente');
  } else {
    console.log('no escribiste nada')
  }

}

/* Mostrar un mensaje al escribir en el input */

tareaEntrada.addEventListener('input', () => {
  //Evaluar si el valor del input esta vacio

  if(tareaEntrada. value.trim()=== '') {
    mensajeTextContent = 'Escribe tu primera tarea';
} else {
  mensaje.textContent = 'al finalizar presiona enter'
}
 })

/* Funcion para crear el elemento tarea */

function crearElementoTarea() {
  // Crear los elemenetos html de la tarea
  const tareaContenedor = document.createElement('div');
  const tareaTexto = document.createElement('p');
  const iconosContenedor = document.createElement('div');
  const iconoCompletada = document.createElement('i');
  const iconoEliminar = document.createElement('i');


  console.log(tareaContenedor);
  console.log(tareaTexto);
  console.log(iconosContenedor);
  console.log(iconoCompletada);
  console.log(iconoEliminar);

}

/* Al presionar la tecla se ejecuta Agregar Tarea */

tareaEntrada.addEventListener('keydown', (e) => {
  // Evaluar la tecla presionada 
  if(e.key === 'Enter') {
    agregarTarea();
  }
})




