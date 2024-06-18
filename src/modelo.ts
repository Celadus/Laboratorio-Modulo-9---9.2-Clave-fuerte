import "./style.css";
import { validarClave } from "./validacionClave";

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "Welcome1*",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "Iloveyou123!",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

//console.log de el caso que La clave debe de tener mayúsculas y minúsculas.
console.log(validarClave("usuario", "clave", commonPasswords));

//console.log de el caso que La clave debe de tener al menos un número.
console.log(validarClave("usuario", "Clave", commonPasswords));

//console.log de el caso que La clave debe de tener al menos un caracter especial.
console.log(validarClave("usuario", "Clave124", commonPasswords));

//console.log de el caso que La clave debe de tener al menos 8 caracteres.
console.log(validarClave("usuario", "Clave1*", commonPasswords));

//console.log de el caso que La clave no deve tener el nombre de usuario.
console.log(validarClave("Usuario76!", "Usuario76!", commonPasswords));

//console.log de el caso que La clave no deve tener palabras comunes.
console.log(validarClave("usuario", "Iloveyou123!", commonPasswords));

//console.log de el caso que La clave es valida.
console.log(validarClave("usuario", "Clave1*!", commonPasswords));
