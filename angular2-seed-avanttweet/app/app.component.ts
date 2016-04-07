import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {VoteComponent} from './vote.component';


@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    <vote
    [initVote]="vote.initVote"
    [monVote]="vote.monVote"
    (vote)="onVote($event)"
    ></vote>`,
    directives: [CoursesComponent,AuthorsComponent,VoteComponent]
})
export class AppComponent {
vote={initVote: 10, monVote:1};

onVote($event){

  console.log($event);
}


}
