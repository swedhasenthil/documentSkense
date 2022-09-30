import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropDownTableComponent } from './drop-down-table.component';

const routes: Routes = [{ path: '', component: DropDownTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropDownTableRoutingModule { }
