import { Component,OnInit } from '@angular/core';
import { Observable, forkJoin, fromEvent, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'

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

          //   array=of('hellow')
          //   array1=of('shaheer')
          

          //   ngOnInit(){
          //  forkJoin([
          //   this.array,
          //   this.array1
          // ]).subscribe({
          //   next:(e)=>{
          //     console.log(e);
              
              
          //   },
          //   error:(e)=>{
          //     console.log(e.message)
              
          //    }
          //  })
           

          //   }


  // -----------------------------------forlJoin--------------------------------------------------------------------



  // -----------------------------------------switchMap-----------------------------------------------------------
  // data: any;
  // error: string;

  // constructor(private http: HttpClient) {}

  // loadData() {
  //   this.getData().subscribe(
  //     (result) => {
  //       this.data = result;
  //       this.error = null;
  //       console.log(result);
        
  //     },
  //     (err) => {
  //       this.data = null;
  //       this.error = 'Failed to load data.';
  //     }
  //   );
  // }

  // getData(): Observable<any> {
  //   const apiUrl = 'https://jsonplaceholder.org/users';

  //   return of(apiUrl).pipe(
  //     switchMap((url) => this.http.get(url)),
  //     catchError((error) => {
  //       console.error('Error:', error);
  //       return of(null); // Return an observable with a default value on error
  //     })
  //   );
  // }

  


  // -----------------------------------------switchMap-----------------------------------------------------------




}
