 import { Component, OnInit } from '@angular/core';
import { MyservicService } from "../myservic.service";
import * as $ from 'jquery';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableObj=[];
  addStatus="";
addObj={countryname:null};
deleteStatus="";
updatecnObj={cnId:null,cnName:null};
updateStatus="";
  constructor(private my:MyservicService) { }

  ngOnInit() {

    this.getCountry();
   
  }
  getCountry()
  {
    this.my.getCountries().subscribe((output:any)=>{
      //console.log(output.data);
      this.tableObj = output.data;
      console.log(this.tableObj);

    });
  }
  addCountry()
  {
    console.log(this.addObj);
    var f=new FormData();
    f.append("countryName",this.addObj.countryname);
    this.my.addCountries(f).subscribe((output:any)=>{
       this.getCountry();
       
    });
  }
  deleteMe(id)
  {
    if(confirm('do you want delete Me?'))
    {
        console.log(id);
        var f=new FormData();
        f.append("countryID",id);
        this.my.deleteCountry(f).subscribe((output:any)=>
        {
           
          this.getCountry();
        });
    }
  }
  updateMe(id)
  
  {
    $("#myModal").modal("show");  // open model show using jqury midel id 
    console.log(id);
    this.my.getCountries().subscribe((output:any)=>{ //  get states

    
      if(output.status==1)
      {
       
          output.data.forEach(element => 
             {
             
              if(element.country_id==id)
              {
            
                this.updatecnObj.cnId=element.country_id;  
                this.updatecnObj.cnName=element.country_name;
              }
            });
    
      }
    });
  }
  updateMe1()
  {
    console.log(this.updatecnObj);
    var f=new FormData();
    f.append("countryName",this.updatecnObj.cnName);
    f.append("countryID",this.updatecnObj.cnId);
    this.my.updateCountries(f).subscribe((output:any)=>
    {
      console.log(output);
      if(output.status==1)
      {

        this.updateStatus=output.message;
        this.getCountry();
      }
      else
      {
        this.updateStatus=output.message;
      }
    });
}

}
