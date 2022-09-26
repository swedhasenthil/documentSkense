import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    DataTablesModule,
    NgbModule   
  ]
})
export class DocumentModule { }
