import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntoService } from '../assunto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assunto } from '../assunto';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assunto-edit.component.html',
  styleUrl: './assunto-edit.component.css'
})
export class AssuntoEditComponent {

  codigo!: number;
  assunto!: Assunto;
  form!: FormGroup;

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

    this.form = new FormGroup({
      descricao: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.assuntoService.update(this.codigo, this.form.value).subscribe((res: any) => {
      console.log('Assunto atualizado com sucesso!');
      this.router.navigateByUrl('assunto/index');
    })
  }
}
