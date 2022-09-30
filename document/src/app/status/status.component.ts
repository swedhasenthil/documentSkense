import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../signin/service/authentication.service';
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

  constructor( public router: Router,
    public authenticationService: AuthenticationService) {
    this.datas = data.data
  }
  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
       paging: true,
    };
  
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
}

}
