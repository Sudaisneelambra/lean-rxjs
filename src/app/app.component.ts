import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section2';

  show: boolean = false

  toggle(){
    this.show = !this.show
  }

  emitter(){
    console.log(this.value);
    
  }


  value:any



  // data passing into emitter

  
  data(val:any){ 
    this.value=val
  }
}
