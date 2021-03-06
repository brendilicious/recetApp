import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService} from 'ngx-toastr';
import { FlashMessagesService } from 'angular2-flash-messages';
//User
//UserService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
//user : User;
emailPattern =  "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public email: string;
  public password;
  constructor(
  //private userService: UserService,
    private toastr: ToastrService,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
   // this.resetForm();
  }
  //resetForm(form? : NgForm)
 // {
   // if(form != null)
    //form.reset();
    //this.user = {
     // UserName: '',
     // Password: '',
     // Email: '',
     // FirstName: '',
     // LastName: ''
   // }
 // }


 //este formulario aplica para el mismo del login. 
 //OnSubmit(form: NgForm) {
 //this.userService.registerUser(form.value)
    //.subscribe((data:any) => {
    //if(data.Succeeded == true)
   //   {
     //  this.resetForm(form);
       //this.toastr.success('Registro de usuario Exitoso!');
     // }
  //}

  onSubmitAddUser() {
    this.authService.registerUser(this.email,this.password)
    .then((res) =>{
      console.log('Bien!!');
      console.log(res);

      this.flashMensaje.show('Usuario creado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/privado']);
    }).catch( (err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
    });
  }
}
