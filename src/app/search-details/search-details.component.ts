import { Component, OnInit } from '@angular/core';
import {SearchService} from '.././services/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
search:any=[];
// repos:any[];

  constructor(private searchservice:SearchService ) {
   this.searchservice.getSearchInfo().subscribe(search =>{
     console.log(search);
     this.search = search;
   });
  //  this.searchservice.getSearchRepos().subscribe(repos => {
  //    console.log(repos);
  //    this.repos= repos;
  //  })
 }



  ngOnInit() {
  }

}
