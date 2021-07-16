import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';
import { UserselectComponent } from './userselect/userselect.component';
const routes: Routes = [
  {path:"list",component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
