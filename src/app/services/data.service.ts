import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class myservice{


    getData(value:any){
            console.log(value);
            
    }

    count: number = 1
}