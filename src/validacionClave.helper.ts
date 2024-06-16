import { ValidacionClave } from "./modelo";

// La clave debe de tener mayúsculas y minúsculas.
const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    // ...
  };

// La clave debe de tener al menos un número.
const tieneNumeros = (clave: string): ValidacionClave => {
    // ...
  };

// La clave debe de tener al menos un caracter especial.
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    // ...
  };

// La clave debe de tener al menos 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
    // ...
  };

// La clave no deve tener el nombre de usuario.
const tieneNombreUsuario = (
    nombreUsuario: string
    clave: string,
  ): ValidacionClave => {
   // ...
  };

// La clave no debe de estar en la lista de contraseñas comunes.
const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // ...
  };
