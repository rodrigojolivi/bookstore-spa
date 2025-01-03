import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroService } from '../livro.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule, FormArray } from '@angular/forms';
import { AutorService } from '../../autor/autor.service';
import { Autor } from '../../autor/autor';
import { Assunto } from '../../assunto/assunto';
import { AssuntoService } from '../../assunto/assunto.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  form!: FormGroup;
  autores: Autor[] = [];
  assuntos: Assunto[] = [];

  constructor(
    public livroService: LivroService,
    public autorService: AutorService,
    public assuntoService: AssuntoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      editora: new FormControl('', [Validators.required]),
      edicao: new FormControl(0, [Validators.required]),
      anoPublicacao: new FormControl('', Validators.required),
      codigoAutores: new FormArray([], [Validators.required]),
      codigoAssuntos: new FormArray([], [Validators.required]),
    });

    this.autorService.getAll().subscribe((data: Autor[]) => {
      this.autores = data;
      console.log(this.autores);
    });

    this.assuntoService.getAll().subscribe((data: Assunto[]) => {
      this.assuntos = data;
      console.log(this.assuntos);
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.livroService.create(this.form.value).subscribe((res: any) => {
      console.log('Livro cadastrado com sucesso!');
      this.router.navigateByUrl('livro/index');
    })
  }

  onChangeAutor(autor: any){
    this.form.value['codigoAutores'].push(autor.codigo);
    console.log(this.form);
  }

  onChangeAssunto(assunto: any){
    this.form.value['codigoAssuntos'].push(assunto.codigo);
    console.log(this.form);
  }
}
