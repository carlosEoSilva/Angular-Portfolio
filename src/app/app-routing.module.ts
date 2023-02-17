import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { InitialComponent } from './initial/initial.component';
import { LoadingComponent } from './loading/loading.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"initial", component: InitialComponent},
  {path:"home", component: HomeComponent},
  {path:"loading", component: LoadingComponent},
  {path:"curriculum", component: CurriculumComponent},
  {path:"certificates", component: CertificatesComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"**", component: InitialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
