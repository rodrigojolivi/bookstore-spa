import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssuntoService } from '../assunto.service';
import { Assunto } from '../assunto';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './assunto-index.component.html',
  styleUrl: './assunto-index.component.css'
})
export class AssuntoIndexComponent {

  assuntos: Assunto[] = [];

  constructor(public assuntoService: AssuntoService) { }

  ngOnInit(): void {
    this.assuntoService.getAll().subscribe((data: Assunto[]) => {
      this.assuntos = data;
      console.log(this.assuntos);
    })
  }

  deleteLivro(codigo: number) {
    this.assuntoService.delete(codigo).subscribe(res => {
      this.assuntos = this.assuntos.filter(item => item.codigo !== codigo);
      console.log('Assunto excluído com sucesso!');
    })
  }
}
