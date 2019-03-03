import { Component,OnInit } from '@angular/core';
import { RestaurentService } from './restaurent.service';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  restData;
  fileReaded:any;
  title = 'restaurants';
  searchResult;

  constructor(private restaurant:RestaurentService){

  }

  ngOnInit(){ 

   // this.restaurant.getCSVData();

    var data = this.restaurant.getRestaurantData().subscribe((data) => {
      //debugger;
    this.restData = data;
     // console.log(data);
      this.csv2Array(data);
    });
  }

  csv2Array(datas){
    //read file from input
   // this.fileReaded = data;//fileInput.target.files[0];
    
   
     let allTextLines = datas.split(/\r|\n|\r/);
     let headers = allTextLines[0].split(',');
     let lines = [];
     let data =[];
     let k=0;
     
     for (let i = 1; i < allTextLines.length; i++) {
       if(allTextLines[i].includes("[")){
        
        var filterData = allTextLines[i].replace('"',"").split("[");
       
      if(filterData.length ==2){}
        filterData =(filterData[0] +filterData[1].split("]")[1] +"-->"+ filterData[1].split("]")[0]).split("-->");
        
        let filter =[];
        filter =  filterData[0].split(",");
        var restaurant ={
          name:filter[0],
          city:filter[1],
          cuisineStyle:filterData[1].replace(new RegExp("'","g"),""),
          ranking:filter[3],
          rating:filter[4],
          numberOfReviews:filter[5]

        };

        

       
  }else{
    debugger;
    let filter = [];
    filter = allTextLines[i].split(",");
    var restaurant ={
      name:filter[0],
      city:filter[1],
      cuisineStyle:filterData[1].replace(new RegExp("'","g"),""),
      ranking:filter[3],
      rating:filter[4],
      numberOfReviews:filter[5]

    };

    

  }
  data[k++] = restaurant;
  lines.push(restaurant);
//i++;

  }
   
     console.log(">>>>>>>>>>>>>>>>>", k);
   //  lines.shift();
     this.restData = lines;
     
    } 
    }
//}
