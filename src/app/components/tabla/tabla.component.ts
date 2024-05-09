import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(AutosService);
  autos: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicio.getAutos().subscribe((data) => {
      this.autos = data
    })
  }

  eliminar(id: any) {
    this.servicio.deleteAutos(id).subscribe(() => {
      this.servicio.getAutos().subscribe((data) => {
        this.autos = data
      })
    })
  }
}
