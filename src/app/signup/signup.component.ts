
import { Component, Input, OnInit } from '@angular/core';
import { UserRoles } from '../models/UserRole';
import { RoleService } from '../role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  roles: UserRoles[]= [];


 @Input()
  username: string ="";
  @Input()
  password: string ="";
  @Input()
 firstname: string ="";
 @Input()
lastname: string ="";
@Input()
email: string ="";


  constructor(private userservice: UserService, private roleservice: RoleService) { }

  ngOnInit(): void {
    this.roleservice.getallroles().subscribe( (response) => {
      console.log(response);
      this.roles=response;
      
      
      
    })

  }

  signupuser(): void{
    
     console.log("firstname " + this.firstname);
     console.log("lastname " + this.lastname);
     console.log("email " + this.email);
     console.log("username " + this.username);
     console.log("Password ", this.password);
   
     //this.roleservice.getallroles().subscribe( (response) => {
       //console.log(response);
     //})
    // console.log("my roles ", this.roles);
   
       console.log("my role one "+ this.roles[0].title);

  }

  selectRole(e:any):void{
   
   let userrole = e.target.value;
    console.log("picked" + (userrole));
   for(let i=0; i<this.roles.length; i++){
        if(this.roles[i].userRoleID ==userrole)
        {
    
          console.log(this.roles[i] + " " + this.roles[i].userRoleID)
        //this.selectRole=this.roles[i];
         
        }
   }
  }

}



