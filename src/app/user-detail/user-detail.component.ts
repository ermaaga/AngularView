import { Form } from '@angular/forms';
import { UserService } from './../ser/user.service';
import { User } from './../types/user';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy : User;
  private _user: User;

  @Input() set user(user: User){
    this._user = user;
    this.userCopy = Object.assign({},user);
  } 
  get user(){
    return this._user;
  }
  constructor(private userservice:UserService, 
              private route:ActivatedRoute,
              private router:Router) {
   }

  ngOnInit(): void {
    this.user=new User();

    this.route.params.subscribe(
      (params) => {
       if(!params.id){
         return;
       }
        this.user = this.userservice.getUser(+params.id)
      }
    );
  }

  
  saveUser(){
    if(this.user.id>0){
      this.userservice.updateUser(this.user);
    }else{     
      this.userservice.createUser(this.user);
    }
    this.router.navigate(['users']);
  }
  resetForm(){   
    if(this.user.id === 0){
      this.user = new User();
    }
    else
    {
      this.user = this.userCopy;      
    }
  }
  backToUsers(){
    this.router.navigate(['users']);
  }

}
