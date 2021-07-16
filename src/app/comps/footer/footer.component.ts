import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild("f") myForm: any;
  constructor(private toastSer: ToastService) { }
  currentYear: any;

  ngOnInit(): void {
    //show current year
    this.currentYear = new Date().getFullYear();
  }

  onSub() {
    let userEmail = this.myForm.form.value.email;
    if (this.myForm.form.status == "VALID") {
      this.toastSer.showSuccess(`${userEmail} was added to our mailing list`, "Great news!")
      this.myForm.reset()
    }
  }

}
