import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.css']
})
export class UpdateApartmentComponent implements OnInit {
  @ViewChild("f") myForm: any;
  singleProperty: any = {}
  constructor(private apartmentsSer: ApartmentService, private route: ActivatedRoute, private router: Router, private toastSer: ToastService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let url = `${this.apartmentsSer.ApiUrl}/appartments/${id}`
    this.apartmentsSer.getSingle(url);
    this.singleProperty = this.apartmentsSer.singleProperty
    console.log(this.singleProperty)
  }
  update() {
    let idEdit = this.route.snapshot.params['id'];
    let url = `${this.apartmentsSer.ApiUrl}/appartments/${idEdit}`;
    console.log(idEdit)
    if (this.myForm.form.status == "VALID") {
      let dataBody = this.myForm.form.value;
      this.apartmentsSer.updateProperty(url, dataBody);
    }
    else {
      this.toastSer.showError("Please check all the fields and try again", "Something went wrong");
    }
  }


}
