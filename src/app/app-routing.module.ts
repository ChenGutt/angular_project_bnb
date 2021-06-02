import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './comps/add-new/add-new.component';
import { AppApartmentsComponent } from './comps/app-apartments/app-apartments.component';
import { AppWelcomeComponent } from './comps/app-welcome/app-welcome.component';
import { ListApartmentsComponent } from './comps/list-apartments/list-apartments.component';
import { ListOwnPropertiesComponent } from './comps/list-own-properties/list-own-properties.component';
import { LoginUserComponent } from './comps/login-user/login-user.component';
import { OwnPropertyUserComponent } from './comps/own-property-user/own-property-user.component';
import { SignupComponent } from './comps/signup/signup.component';
import { UpdateApartmentComponent } from './comps/update-apartment/update-apartment.component';
import { UserInfoComponent } from './comps/user-info/user-info.component';


const routes: Routes = [
  {path: "", component: AppWelcomeComponent },
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginUserComponent},
  {path:"userinfo", component:UserInfoComponent},
  {path:"apartments", component: AppApartmentsComponent, children: [
    { path: "list", component: ListApartmentsComponent},
    { path: "addProperty", component: AddNewComponent },
    { path: "ownproperties", component: OwnPropertyUserComponent, children:[
      { path:"", component:ListOwnPropertiesComponent},
      { path:"update/:id", component:UpdateApartmentComponent}

    ] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
