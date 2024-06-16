import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
} from "./validacionClave.helper";

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
