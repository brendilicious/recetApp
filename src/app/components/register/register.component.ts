import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

//FlashMessagesService
//User
//UserService
//ToasterService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user : User;
emailPattern:  "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

public email: string;
  public password;
  constructor(//private userService: UserService,
  //private toastr: ToastrService
  public authService: AuthService,
  
) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }

 OnSubmit(form: NgForm) {
 this.userService.registerUser(form.value)
    .subscribe((data:any) => {
    if(data.Succeeded == true)
      {
       this.resetForm(form);
       this.toastr.success('Registro de usuario Exitoso!');
      }
  }

}
