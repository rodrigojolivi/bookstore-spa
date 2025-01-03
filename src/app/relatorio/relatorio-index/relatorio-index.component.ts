import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RelatorioService } from '../relatorio.service';
import { Relatorio } from '../relatorio';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './relatorio-index.component.html',
  styleUrl: './relatorio-index.component.css'
})
export class RelatorioIndexComponent {

  relatorios: Relatorio[] = [];

  constructor(public relatorioService: RelatorioService) { }

  ngOnInit(): void {
    this.relatorioService.getAll().subscribe((data: Relatorio[]) => {
      this.relatorios = data;
      console.log(this.relatorios);
    })
  }
}
