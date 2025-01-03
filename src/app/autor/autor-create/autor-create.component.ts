import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorService } from '../autor.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './autor-create.component.html',
  styleUrl: './autor-create.component.css'
})
export class AutorCreateComponent {

  form!: FormGroup;

  constructor(
    public autorService: AutorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.autorService.create(this.form.value).subscribe((res: any) => {
      console.log('Autor cadastrado com sucesso!');
      this.router.navigateByUrl('autor/index');
    })
  }
}
