import { describe, expect, test } from "vitest";
import { validarPassword } from "./password.js";

describe("Validador de contrasenas seguras", () => {
  // Practica Evaluacional: El Validador de Contrasenas Seguras (TDD Basico)
  //
  // Debes programar una funcion llamada validarPassword(password) que reciba
  // un string y devuelva:
  // - Si es valida: { valido: true, errores: [] }
  // - Si es invalida: { valido: false, errores: ["Mensaje del error"] }

  // Ciclo 1 (Longitud):
  // Escribe un test que verifique que "123" es invalida y devuelve
  // el error "Demasiado corta".
  // Haz que falle (RED).
  // Escribe el codigo minimo, hardcodeado si es necesario, para que pase (GREEN).
  test('devuelve "Demasiado corta" cuando la contrasena tiene menos de 8 caracteres', () => {
    const resultado = validarPassword("123");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain("Demasiado corta");
  });

  // Ciclo 2 (Evolucion):
  // Escribir un test con una contrasena de 8 caracteres ("abcdefgh").
  // Veras que el codigo anterior falla o no es suficiente (RED).
  // Modifica la logica para evaluar la longitud real (GREEN).
  test("evalua la longitud real cuando la contrasena tiene 8 caracteres", () => {
    const resultado = validarPassword("abcdefgh");

    expect(resultado.errores).not.toContain("Demasiado corta");
  });

  // Ciclo 3 (Numeros):
  // Repite el proceso para el requisito de incluir al menos un numero,
  // forzando primero el fallo en el test antes de tocar el archivo de produccion.
  test('devuelve "Falta un numero" cuando no contiene numeros', () => {
    const resultado = validarPassword("Abcdefgh");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain("Falta un numero");
  });

  // Ciclo 3 (Mayusculas):
  // Repite el proceso para el requisito de incluir al menos una mayuscula,
  // forzando primero el fallo en el test antes de tocar el archivo de produccion.
  test('devuelve "Falta una mayuscula" cuando no contiene mayusculas', () => {
    const resultado = validarPassword("abcdefg1");

    expect(resultado.valido).toBe(false);
    expect(resultado.errores).toContain("Falta una mayuscula");
  });

  // Reglas de Negocio a Implementar:
  // La contrasena sera considerada segura solo si cumple de forma simultanea:
  // 1. Debe tener una longitud minima de 8 caracteres.
  // 2. Debe contener, al menos, un numero.
  // 3. Debe contener, al menos, una letra mayuscula.
  test("devuelve todos los errores que incumple la contrasena", () => {
    const resultado = validarPassword("abc");

    expect(resultado).toEqual({
      valido: false,
      errores: ["Demasiado corta", "Falta un numero", "Falta una mayuscula"],
    });
  });

  // Ciclo 4 (Refactorizacion):
  // Tras tener todos los casos en verde, incluyendo el caso donde la contrasena
  // es 100% valida, refactoriza el codigo.
  test("devuelve valido true y errores vacio si cumple todos los requisitos", () => {
    const resultado = validarPassword("Abcdefg1");

    expect(resultado).toEqual({
      valido: true,
      errores: [],
    });
  });
});
