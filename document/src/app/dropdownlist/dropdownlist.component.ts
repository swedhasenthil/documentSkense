import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.services';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent implements OnInit {
  countryName: any;
  countryList:any
  State: any;
  stateList: any;
  entries: any;
  stateInfo: any;
  citiesList: any;

  constructor(
    public countryService : CountryService
  ) { }

  ngOnInit(): void {
    this.countryService.getCountryName().subscribe(data=>{
      this.countryList = data;
      console.log("country name", data);
    })
  }
    onChangeCountry(data: any){
      var name = data.target.value;
      const country = this.countryList.find((el: {
        CountryName: any; }) => el.CountryName === name);
       this.stateList = country.States;
  console.log("satelist",country.States)
         }
         onChangeState(data:any){
          var name = data.target.value;
          const state = this.stateList.find((el: {
            StateName: any; }) => el.StateName === name);
           this.citiesList = state.Cities;
      console.log("satelist",this.citiesList)
         }


}
