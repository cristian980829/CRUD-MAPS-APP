import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { StudentModel } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator


  @ViewChild('studentForm', { static: false })
  studentForm!: NgForm;

  studentData!: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['Id','Name', 'Age', 'Mobile', 'Email', 'Address', 'Actions'];
  isEditMode = false;


  constructor( private breakpointObserver: BreakpointObserver,
    private studentService: StudentService,
    private router:Router ) { 
    this.studentData = {} as StudentModel;
  }

  ngOnInit(): void {

    this.getAllStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllStudents(){
    this.studentService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  editItem(el :  any){
    this.studentData = _.cloneDeep(el);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  deleteItem(id: string){

    Swal.fire({
      title: '¿Seguro que desea eliminar este registro?',
      text: `!No podrá revertir los cambios!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '!Sí, eliminalo!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        Swal.fire({
         icon: 'info',
         text:'Eliminando...',
         showConfirmButton: false,
         allowOutsideClick: false
        });
        Swal.showLoading();
        this.studentService.delete(id).subscribe((response: StudentModel) => {
          this.dataSource.data = this.dataSource.data.filter((el:any) => {
            return el.id !== id ? el : false;
          })
          Swal.fire('!Eliminado!', 'El registro ha sido eliminado con exito.', 'success');
        })
      }
    });
  }

  onSubmit(form:NgForm){
    if(form.status==='INVALID'){
      return;
    }
    if(!this.isEditMode){
      this.studentService.save(form.value).subscribe((response: StudentModel) => {
        this.dataSource.data = [...this.dataSource.data, response]
        this.cancelEdit();
      })
    }else{
      form.value.id=this.studentData.id;
      this.studentService.update(form.value).subscribe((response: StudentModel) => {
        this.dataSource.data = this.dataSource.data.map((el:any) => {
          if(el.id!==this.studentData.id){
            return el;
          }else{
             form.value.id=this.studentData.id;
             return form.value;
          }
        })
        this.cancelEdit();
      })
    }
  }



  onStudentClick(student:StudentModel){
    this.router.navigate(['/student', student.id]);
  }
}
