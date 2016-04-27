import {Component} from 'angular2/core';
import {ContactMailComponent} from './contact-mail.component';



@Component({
    selector: 'my-app',
    template: `
    <contact-mail></contact-mail>
    `,
    directives: [ContactMailComponent]
})
export class AppComponent {



}
