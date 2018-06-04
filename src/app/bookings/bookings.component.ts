import { Component, OnInit } from '@angular/core';
import subArr from '../array';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

submit(name,email,phone,street,number,city,country,postcode){

   subArr[0]=name;
   subArr[1]=email;
   subArr[2]=phone;
   subArr[3]=street;
   subArr[4]=streetnumber
   subArr[5]=number;
 subArr[6]=city;
 subArr[7]=postcode;
 subArr[8]=country;



   console.log(subArr);


}



}
