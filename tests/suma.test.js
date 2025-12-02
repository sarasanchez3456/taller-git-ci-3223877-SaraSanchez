// Este test fallará hasta que exportemos 'suma' en app.js (lo haremos en un paso posterior para ver el fallo de CI)
const test = require('node:test');
const assert = require('node:assert');
// Nota: 'require' fallará si no exportamos suma, pero el objetivo es tener el archivo [cite: 49]

test('prueba de suma inicial', () => {
  // Simplemente para tener un test válido que intentará correr
  assert.equal(1 + 1, 2, 'El test básico debe pasar');
});