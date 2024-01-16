import { Component,OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css']
})
export class RXJSoperatorsComponent {


  // ----------------------------------------use map operator--------------------------------------------------------------

          //   array=of(2,3,4,5)

          // ngOnInit(){
          //   let sin=this.array.pipe(map((e)=>{
          //     return e*e
          //   })).subscribe({
          //     next:(e)=>{
          //       console.log(e);
                
          //     }
          //   })
          // }

  // ----------------------------------------use map operator--------------------------------------------------------------

  // -----------------------------------merge Map--------------------------------------------------------------------

            // array=of('a','b','t','e')

            // ngOnInit(){
            //   this.array.pipe(mergeMap((e)=>{
            //   return  of(e.toUpperCase())
            //   })).subscribe({
            //     next:(res)=>{
            //       console.log(res);
                  
            //     }
            //   })
            // }


  // -----------------------------------merge Map--------------------------------------------------------------------

    // -----------------------------------fitler--------------------------------------------------------------------

            // array=of(2,3,4,5,6,8)
          

            // ngOnInit(){
            //   this.array.pipe(
            //     filter((e)=>{
            //       return e%2==0
            //     })
            //   ).subscribe({
            //     next:(e)=>{
            //       console.log(e);
                  
            //     }
            //   })
            // }


  // -----------------------------------filter--------------------------------------------------------------------


    // -----------------------------------forkJoin--------------------------------------------------------------------

            array=of('hellow')
            array1=of('shaheer')
          

            ngOnInit(){
           forkJoin([
            this.array,
            this.array1
          ]).subscribe({
            next:(e)=>{
              console.log(e);
              
              
            },
            error:(e)=>{
              console.log(e.message)
              
             }
           })
           

            }


  // -----------------------------------forlJoin--------------------------------------------------------------------



}
