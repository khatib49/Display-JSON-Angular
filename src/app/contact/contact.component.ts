import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/contact';
import { Address } from './Address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contacts: Contact[]=[]
  constructor() { }
  ngOnInit(): void {
    this.contacts = [
      {id: 1, name: "Rami",email:"khatibrami8@gmail.com",phone:"70853896",birthday:"16/6/2002",
      website:"dad",image:"r.png",address:{street:'sibline',city:'sibline',zip:'0000',country:'lebanon'}
    },
    {id: 2, name: "Hassan",email:"hassan@gmail.com",phone:"78654321",birthday:"18/9/1989",
    website:"mlm",image:"h.png"
    },
    {id: 3, name: "Ahmad",email:"Ahmad@gmail.com",phone:"79632541",birthday:"16/8/2099",
    website:"sls",image:"a.png"
    },
  ];
 // this.contacts = JSON.parse(JSON.stringify(this.contacts))
  //console.warn(this.contacts[0].address?.street)
  }

}
