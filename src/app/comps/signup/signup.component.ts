import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any;
  isSignedUp:boolean = false;
  constructor(private userSer: UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  onSub():void{
    if(this.myForm.form.status == "VALID"){
      console.log(this.myForm.form.value);
      this.userSer.userSignup(this.myForm.form.value)
      // alert("You have signed up!")
      this.isSignedUp = true;
      this.router.navigate(['/login'])
    }
   
  }
}
