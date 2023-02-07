import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './home/home.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';
import { LoadingComponent } from './loading/loading.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HomeComponent,
    MenuCardsComponent,
    LoadingComponent,
    CurriculumComponent,
    CertificatesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
