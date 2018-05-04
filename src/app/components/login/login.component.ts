import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Usuario logeado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    })
    .catch((err) =>{ 
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }
  onClickGoogleLogin(){
   this.authService.loginGoogle()
   .then((res) => {
    console.log('Estoy en Goole:');
     this.router.navigate(['/privado']);
   })
   .catch(err => console.log(err.message));
  }
  onClickFacebookLogin(){
    this.authService.loginFacebook()
    .then((res) => {
      this.router.navigate(['/privado']);
      })
      .catch(err => console.log(err.message));
  }
  onClickTwitterLogin(){
    this.authService.loginTwitter()
    .then((res) => {
      console.log('Estoy en Twitter');
      this.router.navigate(['/privado']);
    })
    .catch(error =>{
      console.log('error',error.message);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       console.log('errorCode:',errorCode);
       console.log('errorMessage:',errorMessage);
       console.log('email:',email);
       console.log('credential:',credential);
    });
  }
  logout(){
    this.afAuth.auth.signOut()
    .then(()=>{
      this.router.navigate(['/']);
    })
  }
}
