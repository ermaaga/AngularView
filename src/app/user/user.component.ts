import { User } from './../types/user';
import { UserService } from '../ser/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()  user: User;
  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userservice:UserService,private route : Router) { }

  ngOnInit(): void {
   
  }
  deleteUser(){    
    this.onDeleteUser.emit(this.user);
       // this.userservice.deleteUser(this.user);
  }
  updateUser(){
    this.route.navigate(['users',this.user.id,'edit']);
    this.onSelectUser.emit(this.user);
  }
  showUserDetail(){
    this.route.navigate(['users',this.user.id]);
  }
}
