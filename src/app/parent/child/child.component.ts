import { Component, ElementRef, Input, ViewChild ,Output,EventEmitter, AfterViewInit} from "@angular/core";

@Component({
    selector:'app-child',
    templateUrl:'./child.component.html',
    styleUrls:['./child.component.css']
})

export class ChildComponent {

    // lockal reference
            // method 1
                // data:any
                // @ViewChild('localref') inpvalue:any
                // clicked(){
                //     this.data=this.inpvalue.nativeElement.value
                // }

            // method 2
                // clicked(value:HTMLInputElement){
                //     this.data=value.value
                // }
            // method 3
                // clicked(value:string){
                //     this.data=value

                // }
    // lockal reference



    // parent to child data sharing

                //  @Input() data!:string

    // parent to child data sharing

     // Eventemiter @output 

                // @Output() event:EventEmitter<any>=new EventEmitter<any>()

                // eventemit(){
                //     this.event.emit("sudais")
                // }
 
     // Eventemiter @output 


    // template to class data transfer using @viewCild

                // @ViewChild('data')
                // value!: ElementRef; 

                // str:string="datas"

                // ngAfterViewInit(): void {
                //     console.log(this.value.nativeElement.innerText);
                //     this.value.nativeElement.innerText=this.str 
                // }

    // template to class data transfer using @viewCild
    
}