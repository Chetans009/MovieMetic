import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'mtic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mtic';
  config;
  constructor(private dataService:DataService){
    
  }
  
  ngOnInit(){
    this.dataService.getConfig()
    .subscribe(result => {
      this.config = result;
    });
  }
}
