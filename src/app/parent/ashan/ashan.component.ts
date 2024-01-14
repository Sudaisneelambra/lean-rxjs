import { Component, EventEmitter, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-ashan',
  templateUrl: './ashan.component.html',
})
export class AshanComponent {

//-------------------------------------------------------observable------------------------------------------------------------------

//   time = new Observable<string>((observer) => {
//     setInterval(() => observer.next(new Date().toString()), 500);
//   });

//   currentGlobalVari: any;

//   nextVariable: any;

//   ngOnInit() {
//     this.time.subscribe({
//       next: (data) => {
//         this.currentGlobalVari = data;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });

//     this.time.subscribe((data) => {
//       this.nextVariable = data;
//     });
//   }

//-------------------------------------------------------observable------------------------------------------------------------------



//-------------------------------------------------------behaviour subject------------------------------------------------------------------

  //   time = new BehaviorSubject<string>(new Date().toString())

  //   currentGlobalVari: any;

  //   nextVariable: any;

  //   ngOnInit() {
  //     this.time.subscribe({
  //         next: (data) => {
  //             this.currentGlobalVari = data;
  //         },
  //         error: (err) => {
  //             console.log(err);
  //         }
  //     })

  //     this.time.subscribe((data) => {
  //         this.nextVariable = data;
  //     })

  //     setInterval(() => this.time.next(new Date().toString()), 500);
  //   }


//-------------------------------------------------------behaviour subject------------------------------------------------------------------


//-------------------------------------------------------Event Emitter------------------------------------------------------------------

time = new EventEmitter<string>();

  currentGlobalVari: any;

  nextVariable: any;

  ngOnInit() {
    setInterval(() => this.time.emit(new Date().toString()), 500)

    this.time.subscribe({
      next: (data: string) => {
        this.currentGlobalVari = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    this.time.subscribe((data) => {
      this.nextVariable = data;
    });
  }


//-------------------------------------------------------Event Emitter------------------------------------------------------------------

}
