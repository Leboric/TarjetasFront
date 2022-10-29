import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.scss']
})
export class CrearTarjetaComponent implements OnInit {

public formTarjeta!:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private tarjetasService:TarjetasService) { }

  ngOnInit(): void {
    this.formTarjeta = this.formBuilder.group({
      titular: ['', Validators.required],
      cedula: ['', [Validators.pattern(".{10,15}"),Validators.required]],
      telefono: ['', [Validators.pattern(".{10}"),Validators.required]],
      tipo: ['', [Validators.required]],
      pan: ['', [Validators.required]]
    })
  }

  Guardar(){
    if (this.formTarjeta.valid) {
      this.tarjetasService.postTarjeta(this.formTarjeta.value).subscribe(data =>{

        if (data.resultado.codigo === "00") {
          Swal.fire(
            ""+data.resultado.descripcion,
            "identificador: "+data.datos.identificador+"\n"
            +"pan: "+data.datos.pan+"\n"
            +"numero validacion: "+data.datos.numeroValidacion
            ,
            'success'
          )
          this.router.navigate(["listar/tarjetas"]);
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
