import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './signin/service/authentication.service';
import { User } from './signin/_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentUser: User = new User;
  user: any;
  admindiv: any;
  title: any;
  isShow: any;
 
  constructor
  (
    public router: Router,
    public authenticationService: AuthenticationService
){
  this.isShow = true;
}
ngOnInit(){
  //Toggle Click Function
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  // this.router.navigate(['dr']);

}
toggleDisplay() {
  this.isShow = !this.isShow;
}

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/signin/login']);
    }
}

