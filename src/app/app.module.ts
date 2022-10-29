import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarTransaccionesComponent } from './componentes/listar-transacciones/listar-transacciones.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { CrearTarjetaComponent } from './componentes/crear-tarjeta/crear-tarjeta.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TarjetasService } from './servicios/tarjetas.service';
import {  HttpClientModule } from '@angular/common/http';
import { EnrolarComponent } from './componentes/enrolar/enrolar.component';
import { CancelarPagoComponent } from './componentes/cancelar-pago/cancelar-pago.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    NavbarComponent,
    ListarComponent,
    HomeComponent,
    ListarTransaccionesComponent,
    PagosComponent,
    CrearTarjetaComponent,
    EnrolarComponent,
    CancelarPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo Requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),

  ],
  providers: [TarjetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
