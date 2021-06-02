import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild("f") myForm: any;
  extras:any[] = [];
  // show:boolean= true;
  constructor(private apartmentsSer: ApartmentService, private router:Router) { }

  ngOnInit(): void {
  }

  onSub() {
    if (this.myForm.form.status == "VALID") {
      let bodyForm = this.myForm.form.value;
    bodyForm.extras = this.extras;
      console.log(bodyForm)
      let url = `${this.apartmentsSer.ApiUrl}/appartments/addnew`
      this.apartmentsSer.addProperty(url,bodyForm);
      alert('success')
      this.router.navigate(['/apartments/ownproperties'])
    }
  }
}
