import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componants/navbar/navbar.component';
import { ProductComponent } from './Componants/product/product.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './service/update/update.component';
import { ViewComponent } from './Componants/view/view.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
