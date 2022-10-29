import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-enrolar',
  templateUrl: './enrolar.component.html',
  styleUrls: ['./enrolar.component.scss']
})
export class EnrolarComponent implements OnInit {
  public formEnrolarTarjeta!:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private tarjetasService:TarjetasService) { }

  ngOnInit(): void {
    this.formEnrolarTarjeta = this.formBuilder.group({
      numeroValidacion: ['', [Validators.pattern(".{3}"), Validators.required]],
      identificador: ['', [Validators.pattern(".{10,15}"),Validators.required]],
    })
  }
  Enrolar(){
    this.tarjetasService.putEnrolarTarjeta(this.formEnrolarTarjeta.value).subscribe(data =>{
      if (data.resultado.codigo ==="01") {
        Swal.fire(
          ""+data.resultado.descripcion,
          "PAN:"+data.datos.pan,
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
  }
}
