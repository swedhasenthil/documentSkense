import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from './user.service';
import { ConfirmedValidator } from './confirmed.validator';
import { AuthenticationService } from '../signin/service/authentication.service';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

export class User {
  id: any;
  firstname: any;
  lastName: any;
  userName: any;
  email: any;
  password: any;
  confirmPassword: any;
  mobileNo: any;
  Address: {
    streetName: any;
    city: any;
    pincode: any;
  } | any;
  user: any;
  status: any;
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  datas: any;
  // public userDetails: FormGroup;
  jobForm: FormGroup;
  preview: any;
  userDatas: any;
  dtOptions: any = {};
  displayStyle: any = "none";
  closeModal: any;
  indiviUser: any;
  formdiv: any;
  tableView: any;
  alterWarning: any;
  alterWarningUser: any;
  alterWarningEmail: any;

  constructor(private http: HttpClient,
    public fb: FormBuilder,
    public userService: UserService,
    private modalService: NgbModal,
    public router: Router,
    public authenticationService: AuthenticationService) 
    {
    this.jobForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      userType: ['', [Validators.required]],
      userStatus: ['', [Validators.required]],
      contacts: this.fb.group({
        streetName: ['', [Validators.required]],
        city: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
    },
      {
        validator: ConfirmedValidator('password', 'confirmPassword')

      }
    );
  }
  get f() { return this.jobForm.controls; }

  ngOnInit(): void {

    this.userService.getAll().subscribe(data => {
      console.log("user", data);
      this.userDatas = data;
      if (this.userDatas.length === 0) {
        this.formdiv = true;
        this.tableView = false;
      }
      else {
        this.formdiv = false;
        this.tableView = true;
      }

    }
    );
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      paging: true,
    };
  }
  newUser() {
    this.formdiv = true;
    this.tableView = false;
  }
  save(data: any) {
    this.preview = JSON.stringify(this.jobForm.value);

    if (this.userDatas.find((x: { userName: any;}) => x.userName === this.jobForm.value.userName)) {
      console.log('Username already exists');
      this.alterWarningUser = true;
      this.alterWarningEmail = false;

    } else if(this.userDatas.find((x: { email: any;}) => x.email === this.jobForm.value.email)){
      console.log('email already exists');
      this.alterWarningEmail = true;
      this.alterWarningUser = false;


    }
    else
      {
        this.userService.NewUser(this.preview).subscribe(
          (data) => {
            console.log(data);
          });
      }
    }

   
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  triggerModal(content: any, id: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });

    this.userService.getUser(id).subscribe(data => {
      console.log("individual user", data);
      this.indiviUser = data;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  update() {
    console.log(this.indiviUser);
    var id = this.indiviUser.id;
  
   
        this.userService.updataUser(this.indiviUser, id).subscribe(data => {
          console.log("data", data);
          this.ngOnInit();
        })
   
  }
  delete(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log("delete", data);
      this.ngOnInit();
    })
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
}
}





