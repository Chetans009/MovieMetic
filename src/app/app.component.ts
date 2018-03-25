import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'mtic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mtic';
  config;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    //Get total config with type casted completely
    // this.dataService.getConfig()
    // .subscribe(result => {
    //   this.config = result;
    // });

    //Get partial config with type casted completely
    // this.dataService.getImageConfig()
    //   .subscribe(
    //   result => {
    //     console.info("only image:", result);
    //     //this.config = result;
    //   },
    //   error => {
    //     console.info("only image: error :", error);
    //   }
    //   );

    //Get all config
    this.dataService.getAllConfig()
      .subscribe(result => {
        console.info("All config:", result);
      });
  }
}
