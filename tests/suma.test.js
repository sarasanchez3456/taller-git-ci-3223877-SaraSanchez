const test = require('node:test');
const assert = require('node:assert');

// Importamos la función suma desde app.js (está un nivel arriba)
const { suma } = require('../src/app.js');

test('Prueba de la función suma', () => {
  assert.strictEqual(suma(5, 3), 8, 'Debería sumar correctamente dos números positivos');
  assert.strictEqual(suma(-1, 1), 0, 'Debería manejar números negativos');
  assert.strictEqual(suma(0, 0), 0, 'Debería manejar la suma de cero');
});