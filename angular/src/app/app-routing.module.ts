import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';

const route:Routes=[
	{path:'dashboard', component:DashboardComponent},
	{path:'', redirectTo:'/dashboard', pathMatch:'full'},
	{path:'students', component:StudentComponent},
  {path:'student/:id', component:StudentDetailComponent},
  {path:'**', component:ComponentNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
  ],
  exports:[
  	RouterModule
  ]
})
export class AppRoutingModule { }
