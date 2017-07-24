import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private flashmessage: FlashMessagesService, private authService: AuthService) {}


  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName
    );
    this.authService.registerUser(user)
    .subscribe(
      data => this.flashmessage.show('You are now registered!', {cssClass: 'alert-success', timeout: '3000'}),
      error => this.flashmessage.show('You are not registered!', {cssClass: 'alert-success', timeout: '3000'})
    );

    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      password: new FormControl(null, Validators.required)
    });
  }
}
