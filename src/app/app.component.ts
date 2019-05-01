import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'router-outlet',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }
  ngOnInit() {
    //load artticles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);

  }

  searchArticles(source) {
    console.log("selected source is : " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}

//https://github.com/theo4u/AuthGuard/tree/master/src/app
//https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1
//https://angular.io/guide/component-interaction
//https://alligator.io/angular/flex-layout/