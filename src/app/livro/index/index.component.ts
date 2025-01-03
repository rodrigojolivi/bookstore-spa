import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  livros: Livro[] = [];

  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.getAll().subscribe((data: Livro[]) => {
      this.livros = data;
      console.log(this.livros);
    })
  }

  deleteLivro(codigo: number) {
    this.livroService.delete(codigo).subscribe(res => {
      this.livros = this.livros.filter(item => item.codigo !== codigo);
      console.log('Livro excluído com sucesso!');
    })
  }
}
