import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    DataTablesModule
  ]
})
export class StatusModule { }
