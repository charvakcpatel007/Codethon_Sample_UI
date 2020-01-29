import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AppComponent/home/home.component';
import { DashboardComponent } from './AppComponent/dashboard/dashboard.component';
import { RequestAccessComponent } from './AppComponent/request-access/request-access.component';
import { HeaderToolbarComponent } from './AppComponent/header-toolbar/header-toolbar.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms'
import { ProjectManagementComponent } from './AppComponent/project-management/project.managment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RequestAccessComponent,
    HeaderToolbarComponent,
    ProjectManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
