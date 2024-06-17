import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validacionClave.helper";

import { validarClave } from "./validacionDeClave";

// La clave debe de tener mayúsculas y minúsculas.
describe("tieneMayusculasYMinusculas", () => {
  it("debe devolver { esValida: false, error: 'La clave debe de tener mayúsculas y minúsculas.' } si la contraseña no contiene tanto mayúsculas como minúsculas", () => {
    // Arrange
    const clave = "PASSWORD123";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña contiene tanto mayúsculas como minúsculas", () => {
    // Arrange
    const clave = "Password123";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// La clave debe de tener al menos un número.
describe("tieneNumeros", () => {
  it("debe devolver { esValida: false, error: 'La clave debe de tener al menos un número.' } si la contraseña no contiene números", () => {
    // Arrange
    const clave = "Password";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener al menos un número.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña contiene números", () => {
    // Arrange
    const clave = "Password123";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// La clave debe de tener al menos un caracter especial.
describe("tieneCaracteresEspeciales", () => {
  it("debe devolver { esValida: false, error: 'La clave debe de tener al menos un caracter especial.' } si la contraseña no contiene caracteres especiales", () => {
    // Arrange
    const clave = "Password123";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener al menos un caracter especial.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña contiene caracteres especiales", () => {
    // Arrange
    const clave = "Password123!";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// La clave debe de tener al menos 8 caracteres.
describe("tieneLongitudMinima", () => {
  it("debe devolver { esValida: false, error: 'La clave debe de tener al menos 8 caracteres.' } si la contraseña no tiene al menos 8 caracteres", () => {
    // Arrange
    const clave = "Pass12!";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave debe de tener al menos 8 caracteres.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña tiene al menos 8 caracteres", () => {
    // Arrange
    const clave = "Password123!";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// La clave no deve tener el nombre de usuario.
describe("tieneNombreUsuario", () => {
  it("debe devolver { esValida: false, error: 'La clave no debe tener el nombre de usuario.' } si la contraseña contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "usuario123";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe tener el nombre de usuario.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña no contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Password123!";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// La clave no debe de estar en la lista de contraseñas comunes.
describe("tienePalabrasComunes", () => {
  it("debe devolver { esValida: false, error: 'La clave no debe de estar en la lista de contraseñas comunes.' } si la contraseña está en la lista de contraseñas comunes", () => {
    // Arrange
    const clave = "password";
    const commonPasswords = [
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
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado).toEqual({
      esValida: false,
      error: "La clave no debe de estar en la lista de contraseñas comunes.",
    });
  });

  it("debe devolver { esValida: true } si la contraseña no está en la lista de contraseñas comunes", () => {
    // Arrange
    const clave = "Password123!";
    const commonPasswords = [
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
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });
});

// Validacion de la clave
describe("validarClave", () => {
  it("debe devolver { esValida: true } si la clave cumple con todas las validaciones", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Password123!";
    const commonPasswords = ["password", "123456"];
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado).toEqual({ esValida: true });
  });

  it("debe devolver { esValida: false} si alguna de las validaciones falla", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Password123";
    const commonPasswords = ["password", "123456"];
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe(
      "La clave debe de tener al menos un caracter especial."
    );
  });
});
