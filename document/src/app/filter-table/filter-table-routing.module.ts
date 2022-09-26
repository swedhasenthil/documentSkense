import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterTableComponent } from './filter-table.component';

const routes: Routes = [{ path: '', component: FilterTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterTableRoutingModule { }
