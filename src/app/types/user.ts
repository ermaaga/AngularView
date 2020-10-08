import { UserInterface } from './../intefraces/user-interface';

export class User implements UserInterface{
    id:number;
    name:string;
    lastName:string;
    email:string;
    fiscalCode:string;
    province:string;
    phone:string;
    age:number;
    constructor(){
        this.id=0;
        this.name ='';
        this.lastName ='';
        this.email ='';
        this.fiscalCode ='';
        this.province ='';
        this.age =18;        
    }
}
