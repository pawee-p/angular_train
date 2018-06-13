import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../shared/service/servicename.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;

  phoneNumber: string;
  _recap: firebase.auth.RecaptchaVerifier;
  otp: string;
  constructor(private _service: ServicenameService, private _auth: AngularFireAuth) {

   }

  ngOnInit() {
   this._recap = new firebase.auth.RecaptchaVerifier('recapt-id');
   this._recap.render().then( () => {
     console.log('xxxxx');
   });
  }


  testData() {
    this.userId = 'admin';
    this.password = '1234';

    this._service.loadProject().subscribe( (resp) => {
      console.log(resp);
    });

  }

  onToggle(_event) {
    console.log(_event);
  }

  onSubmit(loginForm) {
    if (loginForm.valid === false) {
      // tslint:disable-next-line:quotemark
      alert("Please input all field");
    } else {
      const data = loginForm.value;
      // this._service.doLogin(data).subscribe( (resp) => {
      //   console.log(resp);
      // });

      this._auth.auth.signInWithEmailAndPassword(data.userId, data.password).then( (resp) => {
        console.log('sucess', resp);
      }).catch( (err) => {
        console.log('error on', err);
      });
    }

    // this._auth.auth.createUserWithEmailAndPassword("","");

  }

  onGoogleSignIn() {
    this._auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() );
  }

  onFacebookSignIn() {
    this._auth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider() );
  }

  onGithubSignIn() {
    this._auth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider() );
  }

  onRequestOtp() {
    this._auth.auth.signInWithPhoneNumber('+66875446710', this._recap)
    .then(  (confirmationResult) => {
      console.log('sended otp');
      window['confirmationResult'] = confirmationResult;
    }  ) .catch( (err) => {
      console.log(err);
    });
  }

  onConfirmOtp() {
    window['confirmationResult'].confirm(this.otp).then(  (resp) => {
      console.log(resp);
    }  ) .catch( (err) => {
      console.log(err);
    });
  }
}
