import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownlistRoutingModule } from './dropdownlist-routing.module';
import { DropdownlistComponent } from './dropdownlist.component';
import{CountryService} from './country.services'

@NgModule({
  declarations: [
    DropdownlistComponent
  ],
  imports: [
    CommonModule,
    DropdownlistRoutingModule
  ],
  providers:[
    CountryService
  ]
  
})
export class DropdownlistModule { }
