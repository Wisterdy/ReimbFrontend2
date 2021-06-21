import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements  OnInit {
  @Input()
 username: string = "";
 @Input()
 password: string = "";
  constructor() { }


//part3
  ngOnInit(): void {
  }

 

  loginuser():void{
    console.log("username: ", this.username);
    console.log("password", this.password);
  }

}
