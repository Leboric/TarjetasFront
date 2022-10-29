import { Resultado } from "./Resultado";
import { Transaccion } from "./transaccion";

export interface RespuestaListaTransaccion{
    datos:Transaccion[];
    resultado:Resultado;
}