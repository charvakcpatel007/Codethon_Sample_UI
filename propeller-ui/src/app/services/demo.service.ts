import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { Project } from '../AppComponent/project-management/models/project.model';
import 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public _httpClient: HttpClient) { }



  //This addr is including port
  public BASE_URL = "http://" + window.location.host;
  //public BASE_URL = "http://propeller27.azurewebsites.net";
  public EMPLOYEE_DATA_URL = `${this.BASE_URL}/api/v1/employees`;
  public PROJECT_DATA_URL = `${this.BASE_URL}/api/v1/projects`;


  getEmployees() {
    return this._httpClient.get(this.EMPLOYEE_DATA_URL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }

  public getProjects()  {
    return this._httpClient.get(this.PROJECT_DATA_URL);
  }

  public addProject(project : Project) {
    return this._httpClient.post(this.PROJECT_DATA_URL, project);
  }
}
