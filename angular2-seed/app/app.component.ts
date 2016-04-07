import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';



@Component({
    selector: 'my-app',
    template: `
    <zippy title="titre 1">
      Content can see my stuff
    </zippy>
    <zippy title="titre 2">
      lorem ipsum TweetsComponent test
    </zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent {



}
