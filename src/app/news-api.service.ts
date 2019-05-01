import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewsApiService {
  api_key = '67567f935d1f4b9597839297d59307d0';

  constructor(private http:HttpClient) { }
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='
    +this.api_key);
  }
  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey='+this.api_key);
  }

  getArticlesByID(source : String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+ source + '&apiKey='+this.api_key);

  }
}