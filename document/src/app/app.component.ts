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
 
  constructor
  (
    public router: Router,
    public authenticationService: AuthenticationService
){
  
}
ngOnInit(){
  this.router.navigate(['dropdownlist']);

}


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/signin/login']);
    }
}

