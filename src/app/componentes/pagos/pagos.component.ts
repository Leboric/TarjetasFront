import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  public formPago!:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private tarjetasService:TarjetasService) { }

  ngOnInit(): void {
    this.formPago = this.formBuilder.group({
      numeroReferencia: ['', [Validators.required,Validators.pattern(".{6}")]],
      identificador: ['', [Validators.required]],
      total: ['', [Validators.required]],
      direccionCompra: ['', [Validators.required]]
    })
  }

  Guardar(){
    if (this.formPago.valid) {
      this.tarjetasService.postTransacciones(this.formPago.value).subscribe(data =>{

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
