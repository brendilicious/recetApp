import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment.prod';
import { RegisterComponent } from './components/register/register.component';
import { PrivadoComponent } from './components/privado/privado.component';

import { AuthService } from './servicios/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './guards/auth.guard';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ToastrModule } from 'ngx-toastr';
//SeguroPipe,

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    NuevaRecetaComponent,
    AdminComponent,
    NotFoundComponent,
    DetailsComponent,
    EditComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    PrivadoComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    //CareModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    FlashMessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
