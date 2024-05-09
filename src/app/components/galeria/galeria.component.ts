import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  servicio = inject(AutosService);
  autos: any;

  ngOnInit(): void {
    this.servicio.getAutos().subscribe((data) => {
      this.autos = data;
    });
  }
}
