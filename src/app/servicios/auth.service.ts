import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore' ;
import { switchMap } from 'rxjs/operator/switchMap';
import { User } from '../shared/user.model';



@Injectable()
export class AuthService {

  isLoggedIn: boolean=false;
  user: Observable<User>;
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public router: Router) {
    this.user=this.afAuth.authState.switchMap(usuario=>{
      if (usuario){
    
      return this.afs.doc<User>(`users/${usuario.uid}`).valueChanges();
    
      }else{
    
      return Observable.of(null);
      }
      });
    }
    loginTwitter(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
    }
  
  
    loginFacebook(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
    }
    loginGoogle(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    }
    registerUser(email: string, pass: string) {
      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
      err => reject (err));
      });
    }
    loginEmail(email: string, pass: string){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
      err => reject (err));
      });
    }
    getAuth(){
      return this.afAuth.authState.map(auth => auth);
    }
    logout(){
      return this.afAuth.auth.signOut();
    }
  
}
