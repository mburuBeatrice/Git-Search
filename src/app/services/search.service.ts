import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

private username:string;
private clientid = '72a59fe8ac9f259da7d72922f3f4b0bc91a423d3';
private clientsecret = '';
  constructor(private http:HttpClient) {
console.log('service is now ready');
this.username = 'mburuBeatrice';
   }

getSearchInfo(){
return this.http.get("https://api.github.com/users/" + this.username + "$client_id=" + this.clientid + "$client_secret=" + this.clientsecret)
.map(res => res);
}
}
