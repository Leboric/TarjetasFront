import { Registro } from "./registro";
import { Resultado } from "./Resultado";
import { Tarjeta } from "./Tarjeta";

export interface RespuestaRegistro{
    datos:Registro;
    resultado:Resultado;
}