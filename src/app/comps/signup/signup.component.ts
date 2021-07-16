import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any;
  isSignedUp = false;
  submitClicked = false;

  constructor(private userSer: UsersService, private router:Router, private toastSer:ToastService) { }

  ngOnInit(): void {
  }
  onSub():void{
    console.log(this.myForm.form.value);
    this.submitClicked = true;
    if (this.myForm.form.status == "INVALID") {
      this.toastSer.showError("Please try again", "Something went wrong");
    }
  else{
      this.userSer.userSignup(this.myForm.form.value)
      // alert("You have signed up!")
      this.isSignedUp = true;
      this.router.navigate(['/login'])
    }
   
  }
}
