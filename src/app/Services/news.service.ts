import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class NewsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Subscription-Key' : '3009d4ccc29e4808af1ccc25c69b4d5d' })
  };
  
  private newsUrl = 'https://api.smartable.ai/coronavirus/news/US';

  constructor( private http: HttpClient) { }

  getNews():Observable<any> {
    return this.http.get('https://api.smartable.ai/coronavirus/news/US',this.httpOptions);
  }
}
