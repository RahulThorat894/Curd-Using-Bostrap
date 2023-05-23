import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { EmpService } from 'src/app/service/emp.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  fromvalue:any;
constructor(private http:EmpService){

  this.fromvalue=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    name:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(6)])
  })
  
}

postdata(data:any)
{
  this.http.postdata(this.fromvalue.value).subscribe(res => {

  })
  }
get email() :FormControl
{
  return this.fromvalue.get('email') as FormControl
}
get name() :FormControl
{
  return this.fromvalue.get("name") as FormControl
}
get phone()
{
  return this.fromvalue.get('phone') as FormControl
}

get password()
{
  return this.fromvalue.get('password') as FormControl
}




}



