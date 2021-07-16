import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../app/userservice.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  usrList:any =[];
  usrAV:any = [];
  combinedarray:any = [];
  combinedarray1:any = [];
  selectedArray:any = [];
  selected:boolean;
  candidates:any =[];

  searched:boolean;

  styleclass1 = 'list-group-item list-group-item-success';
  styleclass2 = 'list-group-item';
  constructor(private usrsrvs:UserserviceService) { }

  ngOnInit() {
    this.usrsrvs.getUserList().subscribe( data =>{
      this.usrList = data ;
      //console.log(this.usrList)
    },(err) => {}
    );
    this.usrsrvs.getUserAv().subscribe( data =>
      this.usrAV = data ,
      (err) => {}
    );

    //code to merge data present in 2 json files data along with adding 1 more key addcls initialized to false 
    //and added to each object in the array which is used to change the view
    // and to select those objects only to show in next screen
    setTimeout(() =>{
     // console.log('called');
      let arr1 = this.usrList;
      let arr2 = this.usrAV;
      const result = arr1.map(item => {
        const obj = arr2.find(o => o.id === item.id);
        const addclass ={addcls:false};
        return { ...item, ...obj, ...addclass };
      });
    this.combinedarray = result;
    this.candidates = Object.assign([], result);
    //console.log(result);
    },1000);

  }

  //below function to toggle addcls key present in that particular user object 
  select(user,i){
    console.log(user)
    this.combinedarray[i].addcls= !this.combinedarray[i].addcls;
  }
  
  //method used to select all clicked user objects which are to be displayed in next screen
  selectAll(){
    this.selectedArray=[];
    this.combinedarray.forEach(element => {
      if(element.addcls){
        this.selectedArray.push(element);
      }
    });
    //console.log(this.selectedArray);
    this.selected=true;
    this.combinedarray=this.candidates
  }

  back(event){
    this.selected=event;
  }

//search function used to filter the users based on  the text entered in the search field
  searchfun(user){
    //console.log(user)
    var userlist =[];
    this.combinedarray.forEach(
    function(el) {
   if (el.full_name.includes(user)){
   userlist.push(el)
   }
  }
  );
    this.combinedarray=userlist
    //console.log(userlist)
    if(user ===''){
      this.searched=false;
    this.combinedarray=this.candidates
    }
    else{
      this.searched=true;
    }
 
 
}


}
