import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./parent/child/child.component";

const routes:Routes=[
    {
        path:'home',
        component:ChildComponent
    },
    {
        path:'child/:id',
        component:ParentComponent
    },
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class Queryroutes{

}