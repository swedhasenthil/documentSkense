import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './service/authentication.service';
import { User } from './_models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  loginForm: FormGroup | any;
  loading = false;
  submitted = false;
  returnUrl: any;
  alterWarning: any;
  alterSucess: any;
  warningMsg: any;
  currentUser:any= User;
  currentUserSubscription: any = Subscription;
  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public authenticationService: AuthenticationService,
  ) { 
  //   if (this.authenticationService.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f['username'].value,this.f['password'].value,)
        .pipe(first())
        .subscribe(
            data => {
              this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                this.currentUser = user;
                console.log("user",user)
                if(this.currentUser.role === "admin"){
                  this.router.navigate(['/signin/admin']);
                }
                else{
                  this.router.navigate([this.returnUrl]);
                }
            });
                
            },
            error => {
              setTimeout(() => {
                this.alterWarning = true;
              }, 500)
              this.alterSucess = false;
              this.warningMsg = error
                this.loading = false;
            });
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/signin']);
}

}

 
