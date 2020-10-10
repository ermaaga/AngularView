import { UserInterface } from '../intefraces/user-interface';
import { User } from '../types/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  arrayUsers: User[]=[
    {
    id: 1,
    name: 'Ermal1',
    lastName: 'Halilaga',
    email: 'Ermal@email.it',
    fiscalCode: 'AAAABBBBAAACCCAAA',
    province: 'Bari',
    phone: '3201564879',
    age: 23   
    },
    {
    id: 2,
    name: 'Ermal2',
    lastName: 'Halilaga',
    email: 'Ermal@email.it',
    fiscalCode: 'AAAABBBBAAACCCAAA',
    province: 'Bari',
    phone: '3201564879',
    age: 23
    },
    {
    id: 3,   
    name: 'Ermal3',
    lastName: 'Halilaga',
    email: 'Ermal@email.it',
    fiscalCode: 'AAAABBBBAAACCCAAA',
    province: 'Bari',
    phone: '3201564879',
    age: 23
    },
    {
    id: 4,
    name: 'Ermal',
    lastName: 'Halilaga',
    email: 'Ermal@email.it',
    fiscalCode: 'AAAABBBBAAACCCAAA',
    province: 'Bari',
    phone: '3201564879',
    age: 23
    }
  ];
  constructor(){}

    getUsers(){
        return this.arrayUsers;
    }

    deleteUser(user){
      let index = this.arrayUsers.indexOf(user);
      if (index >=0)
      {
        this.arrayUsers.splice(index,1);
      }
    }
    updateUser(user:UserInterface){
      const idx = this.arrayUsers.findIndex((x) => x.id == user.id);
      alert("Salvataggio Avvenuto con successo!");
      if(idx !== -1){
      this.arrayUsers[idx]=user
    }
  }
    createUser(user:UserInterface){
      user.id=this.arrayUsers.length+1;
      this.arrayUsers.splice(0,0,user);
    }
    getUser(id:number){
      return this.arrayUsers.find(user => user.id === id);

    }

   
}