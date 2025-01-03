import { Component } from '@angular/core';

import { AssuntoService } from '../assunto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assunto } from '../assunto';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './assunto-view.component.html',
  styleUrl: './assunto-view.component.css'
})
export class AssuntoViewComponent {

  codigo!: number;
  assunto!: Assunto;

  constructor(
    public assuntoService: AssuntoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['assuntoId'];

    this.assuntoService.find(this.codigo).subscribe((data: Assunto) => {
      this.assunto = data;
    });
  }
}
