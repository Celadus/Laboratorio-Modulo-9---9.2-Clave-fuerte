import { tieneMayusculasYMinusculas } from "./validacionClave.helper";

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
