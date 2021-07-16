import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild("f") myForm: any;
  extras: any[] = [];
  constructor(private apartmentsSer: ApartmentService, private router: Router, private authSer: AuthService, private toast: ToastService) { }

  ngOnInit(): void {
    this.authSer.checkIfToken()
  }

  onSub() {
    if (this.myForm.form.status == "INVALID") {
      this.toast.showError("Plesae check all the fields and try again", "oh oh")
    }
    else {
      //only if form is valid, all inputs will be sent as bodyForm together
      //with exras as new property (array)
      let bodyForm = this.myForm.form.value;
      bodyForm.extras = this.extras;
      console.log(bodyForm)
      let url = `${this.apartmentsSer.ApiUrl}/appartments/addnew`
      this.apartmentsSer.addProperty(url, bodyForm);
    }

  }
}

