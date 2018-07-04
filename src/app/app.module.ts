import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ManagementService } from './services/management.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    ManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
