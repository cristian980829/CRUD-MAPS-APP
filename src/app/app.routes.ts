import { Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';

export const ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: '**', pathMatch:'full', redirectTo: 'students' }
];