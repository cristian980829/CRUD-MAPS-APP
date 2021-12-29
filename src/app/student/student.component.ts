import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentModel } from '../models/student.model';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator

  @ViewChild('studentForm', { static: false })
  studentForm!: NgForm;

  studentData!: StudentModel;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['Id','Name', 'Age', 'Mobile', 'Email', 'Address', 'Actions'];
  isEditMode = false;


  constructor( private studentService: StudentService ) { 
    this.studentData = {} as StudentModel;
  }

  ngOnInit(): void {

    this.getAllStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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
    this.studentService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((el:any) => {
        return el.id !== id ? el : false;
      })
    })
  }

  onSubmit(){
    if(!this.isEditMode){
      console.log("está entrando")
      this.studentService.save(this.studentForm.form.value).subscribe((response: any) => {
        console.log(response)
        this.dataSource.data = [...this.dataSource.data, response]
        this.cancelEdit();
      })
    }else{
      this.studentService.update(this.studentData.id, this.studentForm.form.value).subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((el:any) => {
          if(el.id!==this.studentData.id){
            return el;
          }else{
             this.studentForm.form.value.id=this.studentData.id;
             return this.studentForm.form.value;
          }
        })
        this.cancelEdit();
      })
    }
  }

}
