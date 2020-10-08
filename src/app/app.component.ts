import { User } from './types/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularView';

  showForm : boolean  = false;
  userSelected : User = new User();
  
  updateUser(user:User){
    this.showForm = true;
    this.userSelected = user;

  }
  newUser(){
    this.showForm = true;
    this.userSelected = new User();
  }
}
