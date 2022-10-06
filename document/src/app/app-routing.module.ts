import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {
    path: "", redirectTo: "sigin", pathMatch: "full"
  },
  { path: ' ', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)},
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },

  { path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) }, 
{ path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) },
 { path: 'filterTable', loadChildren: () => import('./filter-table/filter-table.module').then(m => m.FilterTableModule) },
  { path: 'userManagement', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'dropdownlist', loadChildren: () => import('./dropdownlist/dropdownlist.module').then(m => m.DropdownlistModule) },
  { path: 'dropDownTable', loadChildren: () => import('./drop-down-table/drop-down-table.module').then(m => m.DropDownTableModule) },
  { path: 'fileUpload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
