import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  servicio = inject(EmpleadosService);
  items: any;
  empleados: any;

  ngOnInit(): void {
    this.servicio.getEmpleados().subscribe((data) => {
      this.items = data;
      this.empleados = data.results;
    });
  }
}
