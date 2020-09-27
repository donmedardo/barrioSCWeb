import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { HistoriaComponent } from './modules/historia/historia.component';
import { DirectivaComponent } from './modules/directiva/directiva.component';
import { NegociosComponent } from './modules/negocios/negocios.component';

const routes: Routes = [{ path: '', component: HomeComponent },
 { path: 'noticias', component: NoticiasComponent },
 { path: 'historia', component: HistoriaComponent },
 { path: 'directiva', component: DirectivaComponent },
 { path: 'deporte', component: NoticiasComponent },
 { path: 'negocios', component: NegociosComponent },

]
 ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
