import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserForm:any = {}
  userType: string =''
  firstName: string =''
  lastName: string=''
  userGender:string=''
  userEmail:string=''

  constructor(private registerService: RegistrationService) { }

  ngOnInit(): void {
  }

  registerUserFromHomePage =(user)=>{
    console.log(user);
    this.registerService.registerUser(user)
                        .subscribe(response=>{
                          console.log(response);
                        }, error=>{
                          console.log(error);
                        })
  }

}
