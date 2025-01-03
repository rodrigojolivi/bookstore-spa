import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntoService } from '../assunto.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assunto-create.component.html',
  styleUrl: './assunto-create.component.css'
})
export class AssuntoCreateComponent {

  form!: FormGroup;

  constructor(
    public assuntoService: AssuntoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.assuntoService.create(this.form.value).subscribe((res: any) => {
      console.log('Assunto cadastrado com sucesso!');
      this.router.navigateByUrl('assunto/index');
    })
  }
}
