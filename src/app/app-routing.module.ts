import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NAVIGATION_URLS } from './model/enums/navigation-urls';

const routes: Routes = [
  {
    path: '',
    redirectTo: NAVIGATION_URLS.TASK_MANGER,
    pathMatch: 'full'
  },
  {
    path: NAVIGATION_URLS.TASK_MANGER,
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
