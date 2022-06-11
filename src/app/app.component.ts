import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rami'
  data="hello code"
  getval()
  {
    return "Code step by step"
  }
  getname(name:string)//name:any accept ant type ibt,str,floadt or name : string | number 
  {
    alert(name)
  }
  getdata(val:string){
    console.warn(val)
  }
  displayval:string=""
  getuser(val:string)
  {
    console.warn(val)
    this.displayval=val

  }
  count=0;
  counter(type:string)
  {
    this.count++
    type==='add'?this.count++:this.count--
  }
  num=100
  name="peter"
  show='yes'
  color:string='red'
  users=['rami','ahmad','aya'];
  detials=[
    {name:'rami',email:'khatibrami8@gmail.com'},
    {name:'aya',email:'aya@gmail.com'},
    {name:'ahmad',email:'ahmaf@gmail.com'}
  ];
  usersdetials=[
    {name:'rami',email:'khatibrami8@gmail.com',accounts:['facebook','gmail','linkedin']},
    {name:'aya',email:'aya@gmail.com',accounts:['yahoo','mail','linkedin']},
    {name:'ahmad',email:'ahmaf@gmail.com',accounts:['insta','gmail','upwork']}
  ]

}
