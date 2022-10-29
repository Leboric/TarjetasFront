import { Pago } from "./Pago";
import { Resultado } from "./Resultado";

export interface RespuestaPago{
    datos:Pago;
    resultado:Resultado;
}