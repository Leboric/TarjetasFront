import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/modelos/Tarjeta';
import { TarjetasService } from 'src/app/servicios/tarjetas.service';
import { Router } from '@angular/router';
import { RespuestaListaTodos } from 'src/app/modelos/RespuestaListaTodos';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public formEliminarTarjeta!:FormGroup;
  respuestaLista!: RespuestaListaTodos;
  listaTarjetas!: Tarjeta[];
  

  constructor(private formBuilder:FormBuilder,private listarService:TarjetasService, private router:Router) { }

 

  ngOnInit(): void {
    this.listarService.getTarjetas().subscribe(data=>{
      this.respuestaLista=data;
      this.listaTarjetas = this.respuestaLista.datos;
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
