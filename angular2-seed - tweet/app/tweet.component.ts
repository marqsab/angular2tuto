
import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';

@Component({
  selector: 'tweets',
  template: `

      <div *ngFor="#tweet of tweets">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" [src]="tweet.image" [alt]="tweet.author">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{tweet.author}}   <span class="tag">{{tweet.authorTag}}</span></h4>

            <like
            [iLike]="tweet.iLike"
            [totalLikes]="tweet.totalLikes"
            (change)="onFavoriteChange($event)"></like>
            {{tweet.desc}}
          </div>
        </div>

      </div>

  `,
  styles: [`
    .tag {
      color: #ccc;
    }
    .media {
          margin-bottom: 20px;
      }
      .media-object{
          border-radius: 10px;
      }
  `],
  providers: [TweetService],
  directives: [LikeComponent]


})
export class TweetsComponent {

  tweets;

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

  onFavoriteChange($event) {
    console.log($event);
  }



}
