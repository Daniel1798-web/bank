
//Importaciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {provideAuth, getAuth} from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent} from './views/home/home.component'
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { SpinnerComponent } from './components/spinner/spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LogginComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    provideAuth(()=> getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
