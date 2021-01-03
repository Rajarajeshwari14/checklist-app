import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './userhome/userhome.component';
import { LoginService } from './service/LoginService';
import { TodoListService } from './service/ToDoListService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    MatToolbarModule, 
    MatDialogModule
  ],
  providers: [LoginService,TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
