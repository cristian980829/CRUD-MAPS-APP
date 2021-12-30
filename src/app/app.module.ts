import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { ROUTES } from './app.routes';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';
import { MapComponent } from './components/map/map.component';
import { MaterialModule } from './material.module';
import { ShowStudentComponent } from './components/show-student/show-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ToolbarComponent,
    MapComponent,
    ShowStudentComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQl_avX96p70QW_5CjZ0nd7EqL5L6-6hA'
    }),
    AgmDirectionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot( ROUTES ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
