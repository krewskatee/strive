import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private flashmessage: FlashMessagesService) { }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
    this.flashmessage.show('You have successfully logged out.', {cssClass: 'alert-success', timeout: '2000'});
  }

  onSubmit() {
      const user = new User(this.myForm.value.email, this.myForm.value.password);
      this.authService.signIn(user)
          .subscribe(
              data => {
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('userId', data.userId);
                  this.router.navigateByUrl('/dashboard');
                  this.flashmessage.show('You successfully logged in.', {cssClass: 'alert-success', timeout: '2000'});
              },
              error => {
                this.flashmessage.show('Login Failed', {cssClass: 'alert-danger', timeout: '2000'});
            }
          );
      this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, Validators.required)
      });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
