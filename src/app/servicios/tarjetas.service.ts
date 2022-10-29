import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EliminarTarjeta } from '../modelos/Eliminar';
import { Enrolar } from '../modelos/enrolar';
import { RespuestaEliminar } from '../modelos/RespuestaEliminar';
import { RespuestaEnrolar } from '../modelos/RespuestaEnrolar';
import { RespuestaListaTodos } from '../modelos/RespuestaListaTodos';
import { RespuestaListaTransaccion } from '../modelos/RespuestaListaTransaccionTodos';
import { RespuestaPago } from '../modelos/RespuestaPago';
import { RespuestaRegistro } from '../modelos/RespuestaRegistro';
import { Tarjeta } from '../modelos/Tarjeta';
import { Transaccion } from '../modelos/transaccion';


@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8081/tarjeta/';

  getTarjetas(){
    return this.http.get<RespuestaListaTodos>(this.url+"consultar/todo");
  }
  postTarjeta(tarjeta:Tarjeta){
    return this.http.post<RespuestaRegistro>(this.url+"registrar",tarjeta)
  }
  putEnrolarTarjeta(enrolar:Enrolar){
    return this.http.put<RespuestaEnrolar>(this.url+"enrolar",enrolar);
  }
  deleteTarjeta(eliminar:EliminarTarjeta){
    return this.http.put<RespuestaEliminar>(this.url+"eliminar",eliminar);
  }
  getTransacciones(){
    return this.http.get<RespuestaListaTransaccion>(this.url+"transaccion/consultar");
  }

  postTransacciones(transaccion:Transaccion){
    return this.http.post<RespuestaPago>(this.url+"transaccion",transaccion)
  }

  putCancelarPago(transaccion:Transaccion){
    return this.http.put<RespuestaPago>(this.url+"transaccion/cancelar",transaccion)
  }
}
