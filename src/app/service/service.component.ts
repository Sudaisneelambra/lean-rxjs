import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { myservice } from '../services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {


  constructor(private serv:myservice){

  }
  student:people[]
  
  @Output()sin:EventEmitter<any>=new EventEmitter<any>()
  ngOnInit(){


    
    this.student=[
      {
      name:"sudais",
      age:21,
      salery:22000
    },
    {
      name:"sinan",
      age:23,
      salery:26000
    },
    {
      name:"matta",
      age:24,
      salery:65000
    },
    {
      name:"shefin",
      age:28,
      salery:11111
    },
  ]
  // this.serv.getData(this.student)


// data passed in to emitter
  this.sin.emit(this.student)

  
  }

  count: number = this.serv.count

  incrementCount(){
    this.count++
    this.serv.count++
    
  }
  






}


interface people{
  name:string,
  age:number,
  salery:number
}