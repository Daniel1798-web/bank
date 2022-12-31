
//Importaciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent} from './views/home/home.component'
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { BankCartComponent } from './components/bank-cart/bank-cart.component';
import { InfoUserComponent } from './components/info-user/info-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LogginComponent,
    SpinnerComponent,
    BankCartComponent,
    InfoUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
