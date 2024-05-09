import { Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { AutosDetallesComponent } from './components/autos-detalles/autos-detalles.component';
import { FormularioEditarComponent } from './pages/formulario-editar/formulario-editar.component';

export const routes: Routes = [
    {path: 'autos', component: AutosComponent},
    {path: 'gestion', component: GestionComponent},
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'autos-detalles/:idAutos', component: AutosDetallesComponent },
    {path: 'editar/:idAutos', component: FormularioEditarComponent },

    {path: '', redirectTo: 'autos', pathMatch: 'full'},
    {path: '**', component: AutosComponent}

];
