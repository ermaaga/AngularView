import { UserService } from './../ser/user.service';
import { User } from './../types/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

   User: User;
  constructor(private route:ActivatedRoute,private userService : UserService,private router:Router) { }

  title="User Detail";
  ngOnInit(): void {
   
      this.User=new User();
      this.route.params.subscribe(
                (p)=> {
                  this.User= this.userService.getUser(+p.id);
                }
        
        );
    
  }
  backToUsers(){
    this.router.navigate(['users']);
  }
}
