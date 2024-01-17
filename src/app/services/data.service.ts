import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class myservice{

      // data passing into subject

  sub=new Subject<any>()

//   sub: BehaviorSubject<any> = new BehaviorSubject<any>(0);


    getData(value:any){
            console.log(value);
            
    }

    count: number = 1
}