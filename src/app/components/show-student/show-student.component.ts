import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../shared/services/student.service';
import { StudentModel } from 'src/app/shared/models/student.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  student:StudentModel={
    id:"",
    name:"",
    age:0, 
    mobile:0, 
    email:"", 
    address:""
  }; 

  @ViewChild('mobileForm', { static: false })
  mobileForm!: NgForm;

  mobile!: number;

  constructor( private route: ActivatedRoute,
    private router:Router,
    private studentService: StudentService ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    if(id){
      this.studentService.getStudent(id).subscribe((response: StudentModel) => {
        this.student = response;
      })
    }else{
      this.router.navigate(['/students']);
    }
  }

  onSubmit(form:NgForm){
    if(form.status==='INVALID'){
      return;
    }
    this.studentService.updateMobile(this.mobileForm.form.value, this.student.id).subscribe((response: StudentModel) => {
      this.student.mobile=response.mobile;
      this.mobileForm.resetForm();
    })
  }

}
