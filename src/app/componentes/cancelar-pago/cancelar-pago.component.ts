import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cancelar-pago',
  templateUrl: './cancelar-pago.component.html',
  styleUrls: ['./cancelar-pago.component.scss']
})
export class CancelarPagoComponent implements OnInit {

  public formCancelarPago!:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private tarjetasService:TarjetasService) { }

  ngOnInit(): void {
    this.formCancelarPago = this.formBuilder.group({
      numeroReferencia: ['', [Validators.pattern(".{3}"),Validators.required]],
      identificador: ['', [Validators.required]],
      total: ['', [Validators.required]]
    })
  }

  Cancelar(){
    if (this.formCancelarPago.valid) {
      this.tarjetasService.putCancelarPago(this.formCancelarPago.value).subscribe(data =>{

        if (data.resultado.codigo === "00") {
          Swal.fire(
            ""+data.resultado.descripcion,
            "Estado:"+data.datos.estado+"\n"
            +"Referencia:"+data.datos.numeroReferencia+"\n",
            'success'
          )
          this.router.navigate(["listar/transacciones"]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: ""+data.resultado.descripcion,
          })
        }
       })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error el formulario no cumple con las condiciones',
      })
    }
     
    
  }
}
