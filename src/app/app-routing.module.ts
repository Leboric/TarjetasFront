import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarPagoComponent } from './componentes/cancelar-pago/cancelar-pago.component';
import { CrearTarjetaComponent } from './componentes/crear-tarjeta/crear-tarjeta.component';
import { EnrolarComponent } from './componentes/enrolar/enrolar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarTransaccionesComponent } from './componentes/listar-transacciones/listar-transacciones.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { PagosComponent } from './componentes/pagos/pagos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listar/tarjetas', component: ListarComponent },
  { path: 'listar/transacciones', component: ListarTransaccionesComponent },
  { path: 'pagos', component: PagosComponent},
  { path: 'crear/tarjetas', component: CrearTarjetaComponent },
  { path: 'enrolar/tarjeta', component: EnrolarComponent },
  { path: 'pagos/cancelar', component: CancelarPagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
