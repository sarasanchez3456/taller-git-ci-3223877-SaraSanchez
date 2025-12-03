// La función suma es necesaria para el test mínimo.
function suma(a, b) {
  return a + b;
}

// La función para añadir elementos a la UI
function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// Para que el test de la suma funcione en Node.js, debes exportar la función.
module.exports = {
  suma,
  agregarItem,
};

console.log('App lista');
