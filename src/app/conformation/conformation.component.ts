import { Component, OnInit } from '@angular/core';
import subArr from '../array';


@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
name = subArr[0]
  email=subArr[1];
  phone=subArr[2];
street=  subArr[3];
number=  subArr[4];
city= subArr[5];
postcode=subArr[6];
country=subArr[7]
}
