import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../signin/service/authentication.service';
import { TableService } from './table.service';
@Component({
  selector: 'app-drop-down-table',
  templateUrl: './drop-down-table.component.html',
  styleUrls: ['./drop-down-table.component.css']
})
export class DropDownTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  countryList: any;
  stateList: any;
  citiesList: any;
  tableLists: any;
  states: Array<any> = [];
  selectedCountry :any= [];
	cities: Array<any> = [];
  firstName: any;
  lastName: any;
  email: any;
  phoneNumber: any;
  selectedState: any=[];
  selectedCity: any=[];
  country: any;
  state: any;
  city: any;
  countryDropdown: any;
  stateDropdown: any;
  cityDropdown: any;
  CounName: any;

  constructor(
    public tableService: TableService,
    public router: Router,
    public authenticationService: AuthenticationService
  ) {  this.tableService.countryList().subscribe(data=>{
    this.countryList = data;
    console.log("country name", data);  
  }) ; }

  ngOnInit(): void {
;
    this.tableService.tableList().subscribe(data => {
      this.tableLists = data;
      console.log("table list", data,this.tableLists.length)

      for (var i = 0; i < this.tableLists.length; i++) {
        this.CounName = this.tableLists[i].Countries;
        console.log("country",this.CounName)
        if( this.CounName[0].CountryName !== "null") {
          console.log(this.CounName[0].CountryName,i)

          var name = this.CounName[0].CountryName 
          this.onChangeCountry(name,i);
          this.onChangeState(this.CounName[0].StateName,i)
        }
        else
        {
        console.log("table list",name)
        }
      }

    });
  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    }; 
  
  }
  onChangeCountry(data: any,i: any) {
    var name = data;
    console.log("satelist", name)
    this.states[i] = this.countryList.find((cntry: { CountryName: any; }) => cntry.CountryName === data).States;
    console.log("satelist", this.states)
  }
 
  onChangeState(data: any,i:any) {
    var name = data;
    this.state = name;
		this.cities[i] = this.states[i].find((stat:{StateName:any}) => stat.StateName === name).Cities;   
    console.log("satelist", this.cities)
  }
onSubmit(id:any,user:any){


  console.log("user",user)
 
this.tableService.updataUser(user,id).subscribe(data=>{
  console.log("tableView",data);
  this.ngOnInit();
})
}
saveTable() {
  console.log(this.tableLists)
  this.tableService.saveTableAll(this.tableLists).subscribe(data=>{
    console.log("res",data);
    this.ngOnInit();

  })
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/signin']);
}
}
