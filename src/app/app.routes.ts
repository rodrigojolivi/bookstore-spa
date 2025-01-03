import { Routes } from '@angular/router';

import { IndexComponent } from './livro/index/index.component';
import { ViewComponent } from './livro/view/view.component';
import { CreateComponent } from './livro/create/create.component';
import { EditComponent } from './livro/edit/edit.component';
import { AutorIndexComponent } from './autor/autor-index/autor-index.component';
import { AutorViewComponent } from './autor/autor-view/autor-view.component';
import { AutorCreateComponent } from './autor/autor-create/autor-create.component';
import { AutorEditComponent } from './autor/autor-edit/autor-edit.component';
import { AssuntoIndexComponent } from './assunto/assunto-index/assunto-index.component';
import { AssuntoViewComponent } from './assunto/assunto-view/assunto-view.component';
import { AssuntoCreateComponent } from './assunto/assunto-create/assunto-create.component';
import { AssuntoEditComponent } from './assunto/assunto-edit/assunto-edit.component';
import { RelatorioIndexComponent } from './relatorio/relatorio-index/relatorio-index.component';

export const routes: Routes = [
    { path: 'livro', redirectTo: 'livro/index', pathMatch: 'full' },
    { path: 'livro/index', component: IndexComponent },
    { path: 'livro/:livroId/view', component: ViewComponent },
    { path: 'livro/create', component: CreateComponent },
    { path: 'livro/:livroId/edit', component: EditComponent },

    { path: 'autor', redirectTo: 'autor/index', pathMatch: 'full' },
    { path: 'autor/index', component: AutorIndexComponent },
    { path: 'autor/:autorId/view', component: AutorViewComponent },
    { path: 'autor/create', component: AutorCreateComponent },
    { path: 'autor/:autorId/edit', component: AutorEditComponent },

    { path: 'assunto', redirectTo: 'assunto/index', pathMatch: 'full' },
    { path: 'assunto/index', component: AssuntoIndexComponent },
    { path: 'assunto/:assuntoId/view', component: AssuntoViewComponent },
    { path: 'assunto/create', component: AssuntoCreateComponent },
    { path: 'assunto/:assuntoId/edit', component: AssuntoEditComponent },

    { path: 'relatorio', redirectTo: 'relatorio/index', pathMatch: 'full' },
    { path: 'relatorio/index', component: RelatorioIndexComponent }
];
