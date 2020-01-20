import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { EditproductComponent } from './checkin/editproduct/editproduct.component';

const routes: Routes = [
  { path: '', component: CheckinComponent },
  { path: 'edit/:id', component: EditproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
