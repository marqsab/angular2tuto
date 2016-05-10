import {Component} from 'angular2/core';
import {PasswdFormComponent} from './passwd-form.component';



@Component({
    selector: 'my-app',
    template: `
    <passwd-form></passwd-form>
    `,
    directives: [PasswdFormComponent]
})
export class AppComponent {



}
