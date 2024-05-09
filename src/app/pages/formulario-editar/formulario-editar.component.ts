import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css',
})
export class FormularioEditarComponent {
  id: any;
  marca: any;
  color: any;
  imagen: any;
  precio: any;
  descripcion: any;


  servicio = inject(AutosService);

  editar(datos: any) {
    console.log(datos.value);
    this.servicio.putAutos(datos.value).subscribe(() => {
      console.log('Guardado');
    });
    window.location.href = '/gestion';
  }
}
