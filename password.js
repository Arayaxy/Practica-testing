// Practica Evaluacional: El Validador de Contrasenas Seguras (TDD Basico)
//
// Reglas de Negocio a Implementar:
// Debes programar una funcion llamada validarPassword(password) que reciba
// un string y devuelva:
// - Si es valida: { valido: true, errores: [] }
// - Si es invalida: { valido: false, errores: ["Mensaje del error"] }
//
// La contrasena sera considerada segura solo si cumple de forma simultanea:
// 1. Requisito 1: debe tener una longitud minima de 8 caracteres.
//    Mensaje de error: "Demasiado corta".
// 2. Requisito 2: debe contener, al menos, un numero.
//    Mensaje de error: "Falta un numero".
// 3. Requisito 3: debe contener, al menos, una letra mayuscula.
//    Mensaje de error: "Falta una mayuscula".
export function validarPassword(password) {

  // Aqui guardamos todos los fallos que encontremos en la contrasena.
  // Empieza vacio porque todavia no hemos comprobado ninguna regla.

  const errores = [];

  // Regla 1: protege contra contrasenas demasiado cortas.
  // password.length cuenta cuantos caracteres tiene la contrasena.
  // Si tiene menos de 8, no cumple el requisito de longitud minima.

  if (password.length < 8) {

    // push mete el mensaje de error dentro del array errores.
    errores.push("Demasiado corta");
  }

  // Regla 2: protege contra contrasenas sin numeros.
  // /\d/ es una expresion regular que busca cualquier digito del 0 al 9.
  // .test(password) comprueba si la contrasena contiene ese digito.
  // El simbolo ! significa "no", asi que este if entra si NO hay numeros.

  if (!/\d/.test(password)) {
    
    errores.push("Falta un numero");
  }

  // Regla 3: protege contra contrasenas sin letras mayusculas.
  // /[A-Z]/ busca cualquier letra mayuscula desde la A hasta la Z.
  // Con ! delante, comprobamos si NO existe ninguna mayuscula.

  if (!/[A-Z]/.test(password)) {

    errores.push("Falta una mayuscula");
  }

  // Devolvemos un objeto con el resultado final de la validacion.
  return {

    // La contrasena solo es valida si no se ha guardado ningun error.
    // errores.length === 0 devuelve true cuando el array esta vacio.
    
    valido: errores.length === 0,

    // Devolvemos tambien la lista de errores para saber que regla ha fallado.
    errores,
  };
}
