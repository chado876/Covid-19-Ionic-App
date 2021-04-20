import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { Response } from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  // newsList = {
  //   "location": {
  //     "long": -95.712891,
  //     "countryOrRegion": "United States",
  //     "provinceOrState": null,
  //     "county": null,
  //     "isoCode": "US",
  //     "lat": 37.09024
  //   },
  //   "updatedDateTime": "2020-07-30T00:01:09.7171855Z",
  //   "news": [
  //     {
  //       "path": "_news/2020-07-29-trumps-too-little-too-late-coronavirus-pivot.md",
  //       "title": "Trump's too little, too late coronavirus pivot",
  //       "excerpt": "Polls show that COVID-19 is the top concern for voters nationally, and in the swing states. And on this issue Trump has flunked the course.",
  //       "webUrl": "https://thehill.com/opinion/white-house/509455-trumps-too-little-too-late-coronavirus-pivot",
  //       "heat": 75,
  //       "tags": [
  //         "US"
  //       ],
  //       "images": [
  //         {
  //           "url": "https://thehill.com/sites/default/files/trump_mask_getty072020.jpg",
  //           "width": 980,
  //           "height": 551,
  //           "title": null,
  //           "attribution": null,
  //           "isCached": true
  //         }
  //       ],
  //       "type": "article",
  //       "ampWebUrl": "https://thehill.com/opinion/white-house/509455-trumps-too-little-too-late-coronavirus-pivot?amp",
  //       "cdnAmpWebUrl": "https://thehill-com.cdn.ampproject.org/c/s/thehill.com/opinion/white-house/509455-trumps-too-little-too-late-coronavirus-pivot?amp",
  //       "publishedDateTime": "2020-07-29T06:30:00-07:00",
  //       "updatedDateTime": null,
  //       "provider": {
  //         "name": "The Hill",
  //         "domain": "thehill.com",
  //         "images": null,
  //         "publishers": null,
  //         "authors": null
  //       },
  //       "locale": "en-us",
  //       "categories": [
  //         "news"
  //       ],
  //       "topics": [
  //         "Coronavirus in US",
  //         "Coronavirus"
  //       ]
  //     }
  //   ]};
      
  newsList:any = null;
  News:any = null;
  constructor(private newsService : NewsService) { 
    
    // this.newsService.getNews().subscribe((res: Response) => {
    //   this.news = res.news;
    // });

    this.newsService.getNews().subscribe(
      data => {
          this.News = data;
          console.log('success');
          // this.filterNews();
          this.newsList= this.News.news;
          console.log(this.newsList);


      },
      error =>{
        console.log('error');
      }
    );
  }


  ngOnInit(): void {
      console.log(this.newsList);
     
  }

  getNews(){
     this.newsService.getNews().subscribe(
      data => {
          this.newsList = data;
          console.log('success');
          // this.filterNews();
          console.log(this.newsList);

      },
      error =>{
        console.log('error');
      }
    );
    return this.newsService.getNews();
  }

  // filterNews(){
  //   for(let i = 0; i < 10; i ++){
  //       this.filterednews[i] = this.news[i];
  //   }
  // }


}
