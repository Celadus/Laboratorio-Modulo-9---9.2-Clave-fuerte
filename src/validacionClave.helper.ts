import { ValidacionClave } from "./modelo";

const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteresEspeciales = "!@#$%^&*()_-+={[}]|:;,.?";

// La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayuscula = letrasMayusculas
    .split("")
    .some((char) => clave.includes(char.toUpperCase()));
  const tieneMinuscula = letrasMinusculas
    .split("")
    .some((char) => clave.includes(char.toLowerCase()));
  if (tieneMayuscula && tieneMinuscula) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas.",
    };
  }
};

// La clave debe de tener al menos un número.
export const tieneNumeros = (clave: string): ValidacionClave => {
    const tieneNumero = numeros.split("").some((char) => clave.includes(char));
    if (tieneNumero) {
        return { esValida: true };
    } else {
        return { esValida: false, error: "La clave debe de tener al menos un número." };
    }
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
  nombreUsuario: string,
  clave: string
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
