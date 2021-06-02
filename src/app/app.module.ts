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
import { DeletePropertyComponent } from './comps/delete-property/delete-property.component';
import { FooterComponent } from './comps/footer/footer.component';
import { SearchAndSortComponent } from './comps/search-and-sort/search-and-sort.component';
import { AppWelcomeComponent } from './comps/app-welcome/app-welcome.component';


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
    DeletePropertyComponent,
    FooterComponent,
    SearchAndSortComponent,
    AppWelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
