import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AshanComponent } from './parent/ashan/ashan.component';
import { SubjectComponent } from './subject/subject.component';
import { RXJSoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { RountModule } from './created.routing.module';
import { Queryroutes } from './queryparams.routing.module';

@NgModule({
  declarations: [
    AppComponent,ChildComponent,ParentComponent,AshanComponent, SubjectComponent, RXJSoperatorsComponent, ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RountModule,
    Queryroutes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
