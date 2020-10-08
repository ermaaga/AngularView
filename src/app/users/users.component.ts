import { User } from './../types/user';
import { UserService } from '../ser/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output('updateUser') updateUser = new EventEmitter<User>();
  title ='Users';
  arrayUsers : User[]=[];
  constructor(private service : UserService) { 

   }  
   ngOnInit(): void {
     this.arrayUsers = this.service.getUsers();     
  }
  onDeleteUser(user :User){
    this.service.deleteUser(user);
  }
  onSelectUser(user:User){
    const userCopy = Object.assign({},user);
    this.updateUser.emit(userCopy);
  }
}
