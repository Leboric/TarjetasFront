import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RespuestaListaTransaccion } from 'src/app/modelos/RespuestaListaTransaccionTodos';
import { Tarjeta } from 'src/app/modelos/Tarjeta';
import { Transaccion } from 'src/app/modelos/transaccion';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-transacciones',
  templateUrl: './listar-transacciones.component.html',
  styleUrls: ['./listar-transacciones.component.scss']
})
export class ListarTransaccionesComponent implements OnInit {
  public formEliminarTarjeta!:FormGroup;
  respuestaLista!: RespuestaListaTransaccion;
  listaTransacciones!: Transaccion[];
  

  constructor(private formBuilder:FormBuilder,private listarService:TarjetasService, private router:Router) { }

 

  ngOnInit(): void {
    this.listarService.getTransacciones().subscribe(data=>{
      this.respuestaLista=data;
      this.listaTransacciones = this.respuestaLista.datos;
    })
  }

  Eliminar(identificador:String){
    this.formEliminarTarjeta = this.formBuilder.group({
      identificador: [identificador],
    })
    
    this.listarService.deleteTarjeta(this.formEliminarTarjeta.value).subscribe(data => {
      if (data.resultado.codigo ==="00") {
        Swal.fire(
          ""+data.resultado.descripcion,
          'success'
        )
        this.ngOnInit();
      } else {
        
      }
    })
  }
}
