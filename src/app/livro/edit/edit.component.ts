import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  codigo!: number;
  livro!: Livro;
  form!: FormGroup;

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

    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      anoPublicacao: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.livroService.update(this.codigo, this.form.value).subscribe((res: any) => {
      console.log('Livro atualizado com sucesso!');
      this.router.navigateByUrl('livro/index');
    })
  }
}
