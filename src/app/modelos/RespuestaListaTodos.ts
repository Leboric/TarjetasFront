import { Resultado } from "./Resultado";
import { Tarjeta } from "./Tarjeta";

export interface RespuestaListaTodos{
    datos:Tarjeta[];
    resultado:Resultado;
}