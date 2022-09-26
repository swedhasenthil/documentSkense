import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FilterTableRoutingModule } from './filter-table-routing.module';
import { FilterTableComponent } from './filter-table.component';


@NgModule({
  declarations: [
    FilterTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    FilterTableRoutingModule,
    DataTablesModule,

  ]
})
export class FilterTableModule { }
