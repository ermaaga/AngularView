import { OrderService } from './../../shared/order.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm (form?: NgForm){

    if( form = null )
         form.resetForm();

    this.orderService.formData = {
      OrderID: null,
      OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      CustomerID: 0,
      PMethod: '',
      Gtotal: 0
    };
    this.orderService.orderItems = [];

  }
  backToUsers(){
    this.router.navigate(['users']);
  }
}
