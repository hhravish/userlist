import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserselectComponent } from './userselect/userselect.component';
import { UserserviceService } from "../app/userservice.service";
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserselectComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
