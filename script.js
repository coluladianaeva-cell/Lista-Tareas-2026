/* Referencias generales*/

const tareaEntrada = document.getElementById('tarea-entrada');
const botonAgregar = document.getElementById('boton-agregar');
const mensaje = document.getElementById('mensaje');
const contenedorTareas = document.getElementById('contenedor-tareas');
const contadorTotales = document.getElementById('contador-Totales');
const contadorCompletadas = document.getElementById('contador-Terminadas');
const botonOcultar = document.getElementById('boton-ocultar');
const botonEliminar = document.getElementById('boton-eliminar');


/* Escuchadores */

botonAgregar.addEventListener('click', agregarTarea);
botonOcultar.addEventListener('click', ocultarCompletadas);
botonEliminar.addEventListener('click', eliminarCompletadas);

/* Funcion agrgar Tarea */

function agregarTarea() {
  // Generamos una variable para evaluar si hay texto o no

  const texto = tareaEntrada.value.trim();

  // Evaluar la constante texto

  if(texto) {
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);
    tareaEntrada.value = '';
    mensaje.textContent = 'Tarea creada correctamente';
    //Actualizar contenedores
    actualizarContadores();
  } else {
    mensaje.textContent = 'no escribiste nada';
  }

}

/* Mostrar un mensaje al escribir en el input */

tareaEntrada.addEventListener('input', () => {

  //Evaluar si el valor del input esta vacio

  if( tareaEntrada.value.trim() === '' ) {
    mensaje.textContent = 'Escribe tu primera tarea';
} else {
  mensaje.textContent = 'al finalizar presiona enter';
}
 } )

/* Funcion para crear el elemento tarea */

function crearElementoTarea() {
  // Crear los elemenetos html de la tarea
  const tareaContenedor = document.createElement('div');
  const tareaTexto = document.createElement('p');
  const iconosContenedor = document.createElement('div');
  const iconoCompletada = document.createElement('i');
  const iconoEliminar = document.createElement('i');

// Crear estructura de la tarea 

iconosContenedor.append(iconoCompletada, iconoEliminar);
tareaContenedor.append(tareaTexto, iconosContenedor);

// Agregar las clases a los elementos

tareaContenedor.classList.add('tarea');

tareaTexto.classList.add('tarea-texto');
iconosContenedor.classList.add('tarea-icono');
iconoCompletada.classList.add('bi', 'bi-check-circle');
iconoEliminar.classList.add('bi', 'bi-trash-fill');

// Agregar el texto que escribe el usuario en el input

tareaTexto.innerText = tareaEntrada.value;

// escuchadores de icono

iconoCompletada.addEventListener('click', (e) => {
 const tareaElemento = e.target.parentNode.parentNode;
const esCompletada = tareaElemento.classList.contains('tarea-completada');

 tareaElemento.classList.toggle('tarea-completada');

 if(esCompletada) {
  e.target.classList.remove('bi-dash-circle')
  e.targetclassList.add('bi-check-circle')
 } else {
  e.target.classList.remove('bi-check-circle');
  e.target.classList.add('bi-dash-circle')
 }

 //Actualizar contadores
 actualizarContadores();

})

iconoEliminar.addEventListener('click', (e) => {
  const tareaElemento = e.target.parentNode.parentNode
  tareaElemento.remove();

  //Actualizar contadores
  axtualizarContadores();

})
 
//Retornamos la estructura de la tarea 
return tareaContenedor;
}

/* Funcion ocultar completadas. Muestra y oculta las tareas marcadas como completadas */

let tareaOculta = false; //Controlar el estado de las tareas

function ocultarCompletadas() {
  const tareasCompletadas = document.querySelectorAll('.tarea-completada');

  // Iteraciónde elementos 
  tareasCompletadas.forEach( (tarea) => {
      
    if(tareasOcultas) {
      //Mostramos tareas
      tarea.style.display = "flex";
    } else {
      //Ocultamos tareas
      tarea.style.display = "none"
    }
  } );

  //Cambiamos el estado de la variable 

  tareasOcultas = !tareasOcultas;



  if(tareasOcultas) {
    botonOcultar.textContent = "Mostrar completadas"
  } else {
    botonOcultar.textContent = "Ocultar completadas"
  }

}







/*  Duncion Eliminar Completadas. Borra las tareas como completadas */

function eliminarCompletadas() {
  console.log("muere")
}

/* Al presionar la tecla se ejecuta Agregar Tarea */

tareaEntrada.addEventListener('keydown', (e) => {
  
  // Evaluar la tecla presionada 
  if(e.key === 'Enter') {
    agregarTarea();
  }
})

/* Actualizamos los contenedores */

function actualizarContadores() {
  //Contar todas las tareas

  const tareasTotales = document.querySelectorAll('.tarea');
  const tareasCompletadas = document.querySelectorAll('.tarea-completada');

 contadorTotales.textContent = tareasTotales.length;
 contadorCompletadas.textContent = tareasCompletadas.length;
}

/* Al inicializar la pagina */

actualizarContadores();



