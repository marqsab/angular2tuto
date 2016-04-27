import {Component} from 'angular2/core';


@Component({
  selector: 'contact-mail',
  templateUrl: 'app/contact-mail.component.html'

  })


  export class ContactMailComponent {
      frequencies = [
          { id: 1, label: 'Daily' },
          { id: 2, label: 'Weekly' },
          { id: 3, label: 'Monthly' }
      ];

      onSubscribe(form){
          console.log(form.value);
      }
  }
