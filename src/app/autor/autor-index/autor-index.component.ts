import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorService } from '../autor.service';
import { Autor } from '../autor';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './autor-index.component.html',
  styleUrl: './autor-index.component.css'
})
export class AutorIndexComponent {

  autores: Autor[] = [];

  constructor(public autorService: AutorService) { }

  ngOnInit(): void {
    this.autorService.getAll().subscribe((data: Autor[]) => {
      this.autores = data;
      console.log(this.autores);
    })
  }

  deleteAutor(codigo: number) {
    this.autorService.delete(codigo).subscribe(res => {
      this.autores = this.autores.filter(item => item.codigo !== codigo);
      console.log('Autor excluído com sucesso!');
    })
  }
}
