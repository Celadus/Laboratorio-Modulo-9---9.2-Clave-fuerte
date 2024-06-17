import { ValidacionClave } from "./modelo.js";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validacionClave.helper.js";

// Validacion de la clave
export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
    tieneCaracteresEspeciales(clave),
  ];
  const validacionFallida = validaciones.find(
    (validacion) => !validacion.esValida
  );
  if (validacionFallida) {
    return validacionFallida;
  } else {
    return { esValida: true };
  }
};
