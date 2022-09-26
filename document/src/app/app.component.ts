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
  this.admindiv = true;
        this.authenticationService.currentUser.subscribe(x => 
          console.log(x));

     this.user = this.currentUser.role
     console.log(this.user)
     if(this.user == 'admin')
     {
       this.admindiv = true;
       console.log("data")
     }
     else(this.user === "user")
     {
      this.admindiv = false;
     }
}
ngOnInit(){
  this.router.navigate(['document']);

}


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/signin/login']);
    }
}

