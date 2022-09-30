import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../signin/service/authentication.service';
import studentsData from './students.json';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  title = 'test';
  students: any;
  student: any;
  studentData: any = [];
  dtOptions: DataTables.Settings = {};
  filterOption: any;
  selectedDevice: any;
  selectedDemo: any;
  selectedAssign: any;
  allItems: any;
  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {

    this.students = studentsData
    this.selectedDemo = "Demo";
    this.selectedAssign = "teams";
    this.selectedDevice = "all";
  }
  ngOnInit() {
 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,

    };
    this.students = studentsData
    this.filterOption = new Set(studentsData.map(v => v.status))
    console.log(this.filterOption)

  }

  onChange() {
    console.log(this.selectedDevice);
    if (this.selectedDevice !== "all") {
      var stud = studentsData.filter((t: { status: any; }) => t.status === this.selectedDevice);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else {
      this.students = studentsData;
      console.log("data", this.selectedDevice, this.students);
    }
  }
  onChangeAssign() {
    console.log(this.selectedAssign);
    if (this.selectedAssign === "teams") {
      var stud = studentsData.filter(t => t.status === this.selectedDevice);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else
      (this.selectedAssign === "others")
    {
      var stud = studentsData.filter(t => t.assigned === this.selectedAssign);
      console.log("value of filter", stud)
      this.students = stud;
    }
  }
  onChangeDemo() {
    console.log(this.selectedDemo);
    if (this.selectedDemo === "Demo") {
      var stud = studentsData.filter(t => t.project === this.selectedDemo);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else
      (this.selectedDemo === "live")
    {
      var stud = studentsData.filter(t => t.project === this.selectedDemo);
      console.log("value of filter", stud)
      this.students = stud;
    }
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
}
}
