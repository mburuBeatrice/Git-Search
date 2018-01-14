import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

private username:string;
private access_token = '72a59fe8ac9f259da7d72922f3f4b0bc91a423d3';

  constructor(private http:HttpClient) {
console.log('service is now ready');
this.username = 'mburuBeatrice';
   }

getSearchInfo(){
return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.access_token )
.map(res => res);
}

// getSearchRepos(){
// return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.access_token )
// .map(res => res);
// }
}
