import { Component, OnInit } from '@angular/core';
import { myservice } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private serv:myservice)
  {

  }
  
  ngOnInit(): void {
    this.serv.sub.subscribe({
      next:(val)=>{
        console.log(val);
        
      },
      error:()=>{
        console.log("error");
        
      }
    })
  }

  // data transfer using service




  title = 'section2';

  show: boolean = false

  toggle(){
    this.show = !this.show
  }

  emitter(){
    // console.log(this.serv.sub);
    this.serv.sub.subscribe({
      next:(val)=>{
        console.log(val);
        
      },
      error:()=>{
        console.log("error");
        
      }
    })
    
  }


  value:any



  // data passing into emitter
  data(val:any){ 
    this.value=val
  }
}
