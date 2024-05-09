import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos-detalles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './autos-detalles.component.html',
  styleUrl: './autos-detalles.component.css',
})
export class AutosDetallesComponent {
  ruta = inject(ActivatedRoute);
  servicios = inject(AutosService);
  autos: any;
  detalles: any;
  id: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ruta.params.subscribe((params) => {
      console.log(params);
      this.id = params['idAutos'];
      console.log(this.id);
      this.servicios.getAutos().subscribe((data) => {
        this.autos = data;
        this.detalles = this.autos.find((item: any) => item.id == this.id);
        console.log(this.detalles);
      });
    });
  }
}
