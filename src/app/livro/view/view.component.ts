import { Component } from '@angular/core';

import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  codigo!: number;
  livro!: Livro;

  constructor(
    public livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['livroId'];

    this.livroService.find(this.codigo).subscribe((data: Livro) => {
      this.livro = data;
    });
  }
}
