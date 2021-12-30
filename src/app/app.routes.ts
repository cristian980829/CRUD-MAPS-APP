import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { ShowStudentComponent } from './components/show-student/show-student.component';
import { StudentComponent } from './components/student/student.component';


export const ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'student/:id', component: ShowStudentComponent },
  { path: 'maps', component: MapComponent },
  { path: '**', pathMatch:'full', redirectTo: 'students' }
];