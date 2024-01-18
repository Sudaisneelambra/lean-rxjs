import { Component, ViewChild ,OnInit} from "@angular/core";
import { AshanComponent } from "./ashan/ashan.component";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector:'app-parent',
    templateUrl:'./parent.component.html',
    styleUrls:['/parent.component.css']
})

export class ParentComponent {
    // parent to child data sharing

                // title:string="shibinshad weds neha"

    // parent to child data sharing


    // Event binding 
                // click event
                // title:any
                // clicked(data:HTMLInputElement){
                //     this.title=data.value
                // }
                
                // // mouse event
                // handleKeyUp(event: any){
                //         console.log(event);
                        
                // }
    // Event binding 

    // Eventemiter @output 
    
                // done(val:any){
                //     console.log(val);
                    
                // }
    // Eventemiter @output 

  

// // ------------------- getting query params-------------------------------------------


    // constructor(private rout:ActivatedRoute){

    // }
    // sin:number
    // productId:number
    // title:string
    // ngOnInit(){
    //         this.rout.queryParams.subscribe((val)=>{
    //             console.log(val);
                
    //             this.productId= +val['id']
    //         })

    // // getting properties from routes using activated route

    //         this.rout.title.subscribe((tit)=>{
    //             console.log(tit);
    //             this.title=tit
                
    //         })


    // // -------------------this is the another method of getting query params-------------------------------------------
    
    // this.sin=this.rout.snapshot.params['id']
    // this.productId=this.sin
    // }
    
//    // ------------------- getting query params-------------------------------------------




// // -------------------getting  params-------------------------------------------


    // constructor(private rout:ActivatedRoute){

    // }
    // sin:number
    // productId:number
    // ngOnInit(){
    //         this.rout.params.subscribe((val)=>{
    //             console.log(val);
                
    //             this.productId= +val['id']
    //             console.log(this.productId);
                
    //         })

// -------------------this is the another method of getting  params-------------------------------------------

    //         this.sin=this.rout.snapshot.params['id']
    // }

// // ------------------- getting  params-------------------------------------------


    

}