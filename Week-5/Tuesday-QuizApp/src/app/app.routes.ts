import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { DetailFormComponent } from './detail-form/detail-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/detailform', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'result/:marks', component: ResultComponent },
 { path: 'detailform', component: DetailFormComponent },

  { path: 'form/:id', component: FormComponent },

];
