import {Component} from 'angular2/core';
import {TweetsComponent} from './tweet.component';



@Component({
    selector: 'my-app',
    template: `
    <tweets></tweets>
    `,
    directives: [TweetsComponent]
})
export class AppComponent {



}
