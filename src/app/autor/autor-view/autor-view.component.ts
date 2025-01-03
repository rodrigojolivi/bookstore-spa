import { Component } from '@angular/core';

import { AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './autor-view.component.html',
  styleUrl: './autor-view.component.css'
})
export class AutorViewComponent {

  codigo!: number;
  autor!: Autor;

  constructor(
    public autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['autorId'];

    this.autorService.find(this.codigo).subscribe((data: Autor) => {
      this.autor = data;
    });
  }
}
