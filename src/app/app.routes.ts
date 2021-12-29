import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { StudentComponent } from './components/student/student.component';


export const ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'maps', component: MapComponent },
  { path: '**', pathMatch:'full', redirectTo: 'students' }
];