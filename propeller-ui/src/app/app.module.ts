import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AppComponent/home/home.component';
import { DashboardComponent } from './AppComponent/dashboard/dashboard.component';
import { RequestAccessComponent } from './AppComponent/request-access/request-access.component';
import { HeaderToolbarComponent } from './AppComponent/header-toolbar/header-toolbar.component';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectManagementComponent } from './AppComponent/project-management/project.managment.component';
import { FormsModule } from '@angular/forms'

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
    RouterModule.forRoot(routes, { useHash: true }),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
