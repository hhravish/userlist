import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userselect',
  templateUrl: './userselect.component.html',
  styleUrls: ['./userselect.component.css']
})
export class UserselectComponent implements OnInit {
@Input() public selectedData:any [];
@Output() goback =new EventEmitter(); 
  constructor() { }

  ngOnInit() {
    console.log(this.selectedData);
  }

  back() {
    this.goback.emit(false);
  }

}
