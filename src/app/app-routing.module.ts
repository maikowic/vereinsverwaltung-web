import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberManagementComponent } from './member-management/member-management.component';
import { FinanceComponent } from './finance/finance.component';
import { MemberCreateFormComponent } from './member-management/member-create-form/member-create-form.component';


const routes: Routes = [
  { path: 'management', component: MemberManagementComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'form', component: MemberCreateFormComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', redirectTo: '/management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
