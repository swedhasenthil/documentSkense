import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DropDownTableRoutingModule } from './drop-down-table-routing.module';
import { DropDownTableComponent } from './drop-down-table.component';
import { TableService } from './table.service';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    DropDownTableComponent
  ],
  imports: [
    CommonModule,
    DropDownTableRoutingModule,
    DataTablesModule ,
    FormsModule
  ],
  providers:[
    TableService
  ]
})
export class DropDownTableModule { }
