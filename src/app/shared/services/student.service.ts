import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { StudentModel } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  base_Url = "http://localhost:3000/students";

  constructor( private http : HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      console.error("An error ocurred: ", error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status}, `  +
        `body was: ${error.error}` 
      );
    }

    return throwError(() => 'Something bad happened; please try again later.');
  }

  //Create student with POST method
  save(item: StudentModel) : Observable<StudentModel>{
    return this.http.post<StudentModel>(this.base_Url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  //Get all students with GET method
  getList() : Observable<StudentModel>{
    return this.http.get<StudentModel>(this.base_Url)
      .pipe(retry(2), catchError(this.handleError))
  }

  //Get one students with GET method
  getStudent(id: string) : Observable<StudentModel>{
    return this.http.get<StudentModel>(this.base_Url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  //Update student with PUT method
  update(item: any) : Observable<StudentModel>{
    return this.http.put<StudentModel>(this.base_Url + '/' + item.id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  //Update student with PATCH method
  updateMobile(mobile: number, id: string) : Observable<StudentModel>{
    return this.http.patch<StudentModel>(this.base_Url + '/' + id, JSON.stringify(mobile), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  //Update student with PUT method
  delete(id: string) {
    return this.http.delete<StudentModel>(this.base_Url + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }


}
