import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './autor-edit.component.html',
  styleUrl: './autor-edit.component.css'
})
export class AutorEditComponent {

  codigo!: number;
  autor!: Autor;
  form!: FormGroup;

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

    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      nome: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.autorService.update(this.codigo, this.form.value).subscribe((res: any) => {
      console.log('Autor atualizado com sucesso!');
      this.router.navigateByUrl('autor/index');
    })
  }
}
