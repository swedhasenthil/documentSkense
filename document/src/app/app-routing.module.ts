import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) }, 
{ path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) },
 { path: 'filterTable', loadChildren: () => import('./filter-table/filter-table.module').then(m => m.FilterTableModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'userManagement', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'dropdownlist', loadChildren: () => import('./dropdownlist/dropdownlist.module').then(m => m.DropdownlistModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
