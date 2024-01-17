import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { RXJSoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { AshanComponent } from './parent/ashan/ashan.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '',title:'child componet title', component: ChildComponent },
  {
    path: 'parent',
    title:'parent componet title',
    component: ParentComponent,
    children: [
        { path: 'ashan',  title:'ashan componet title', component: AshanComponent }
    ]
  },
  { path: 'rx', component: RXJSoperatorsComponent },
  { path: '**', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RountModule {}
