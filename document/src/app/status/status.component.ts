import { Component, OnInit } from '@angular/core';
import  data from './data.json';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  title = 'test';
  dtOptions: DataTables.Settings = {};
  datas: any;

  constructor() {
    this.datas = data.data
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
       paging: true,
    };
  
  }

 

}
