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
  "welcome",
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
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

//console.log de las diferentes posibilidades
console.log(validarClave("nombreUsuario", "Usuario123*", commonPasswords));
console.log(validarClave("nombreUsuario", "usuario123*", commonPasswords));
console.log(validarClave("nombreUsuario", "Usuario*", commonPasswords));
console.log(validarClave("nombreUsuario", "Usuario123", commonPasswords));
console.log(
  validarClave("nombreUsuario", "nombreUsuario123*", commonPasswords)
);
console.log(validarClave("nombreUsuario", "Password123*", commonPasswords));
console.log(validarClave("", "Password123*", commonPasswords));
console.log(validarClave("nombreUsuario", "", commonPasswords));
