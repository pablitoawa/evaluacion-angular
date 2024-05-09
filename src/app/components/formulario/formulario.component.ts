import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  id: any;
  marca: any;
  color: any;
  precio: any;

  servicio = inject(AutosService);

  guardar(datos: any) {
    console.log(datos.value);
    this.servicio.postAutos(datos.value).subscribe(() => {
      console.log('Guardado');
    });

    window.location.reload();
  }
}
