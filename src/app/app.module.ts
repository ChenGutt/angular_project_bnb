import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './comps/users/users.component';
import { SignupComponent } from './comps/signup/signup.component';
import { LoginUserComponent } from './comps/login-user/login-user.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HeaderComponent } from './comps/header/header.component';
import { UserInfoComponent } from './comps/user-info/user-info.component';
import { AppApartmentsComponent } from './comps/app-apartments/app-apartments.component';
import { ListApartmentsComponent } from './comps/list-apartments/list-apartments.component';
import { AddNewComponent } from './comps/add-new/add-new.component';
import { UpdateApartmentComponent } from './comps/update-apartment/update-apartment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnPropertyUserComponent } from './comps/own-property-user/own-property-user.component';
import { ListOwnPropertiesComponent } from './comps/list-own-properties/list-own-properties.component';
import { FooterComponent } from './comps/footer/footer.component';
import { SearchAndSortComponent } from './comps/search-and-sort/search-and-sort.component';
import { AppWelcomeComponent } from './comps/app-welcome/app-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    LoginUserComponent,
    NavbarComponent,
    HeaderComponent,
    UserInfoComponent,
    AppApartmentsComponent,
    ListApartmentsComponent,
    AddNewComponent,
    UpdateApartmentComponent,
    OwnPropertyUserComponent,
    ListOwnPropertiesComponent,
    FooterComponent,
    SearchAndSortComponent,
    AppWelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 2000,
      progressBar:true
    }),
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
