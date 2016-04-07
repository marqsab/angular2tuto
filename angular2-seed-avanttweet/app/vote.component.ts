import {Component, Input, Output, EventEmitter} from "angular2/core"




@Component({
  selector: 'vote',
  template:`
  <div class="vote">
  <i class="glyphicon glyphicon-menu-up vote-button"
  [class.highlighted]="countVote == 1"
  (click)="upVote()"
  ></i>
  <span>{{count + countVote}}</span>
  <i class="glyphicon glyphicon-menu-down vote-button"
  [class.highlighted]="countVote == -1"
  (click)="downVote()"></i>
  </div>`,
  styles:[`
    .vote {
      width: 20px;
      color: #999;
      text-align: center
    }
    .highlighted {
      color: orange;
    }
    .vote-button{
      cursor: pointer
    }
    `]

})


export class VoteComponent{

  @Input('initVote') count = 0;
  @Input('monVote') countVote = 0;

  @Output() vote = new EventEmitter();

  upVote(){
    if(this.countVote == 1){
      return;
    }
    this.countVote += 1;
    this.vote.emit({myVote: this.countVote});
  }

  downVote(){
    if(this.countVote == -1){
      return;
    }
    this.countVote -= 1;
    this.vote.emit({myVote: this.countVote});
  }

}
