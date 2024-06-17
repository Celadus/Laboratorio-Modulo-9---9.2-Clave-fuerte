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
    return {
      esValida: false,
      error: "La clave debe de tener al menos un número.",
    };
  }
};

// La clave debe de tener al menos un caracter especial.
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const contieneCaracterEspecial = caracteresEspeciales
    .split("")
    .some((char) => clave.includes(char));
  if (contieneCaracterEspecial) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener al menos un caracter especial.",
    };
  }
};

// La clave debe de tener al menos 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener al menos 8 caracteres.",
    };
  }
};

// La clave no deve tener el nombre de usuario.
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const contieneNombreUsuario = clave.includes(nombreUsuario);
  if (contieneNombreUsuario) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre de usuario.",
    };
  } else {
    return { esValida: true };
  }
};

// La clave no debe de estar en la lista de contraseñas comunes.
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const esComun = commonPasswords.some((password) => password === clave);
  if (esComun) {
    return {
      esValida: false,
      error: "La clave no debe de estar en la lista de contraseñas comunes.",
    };
  } else {
    return { esValida: true };
  }
};
