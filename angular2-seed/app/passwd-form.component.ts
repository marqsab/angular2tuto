import {Component} from 'angular2/core';
import {ControlGroup,Control,Validators,FormBuilder} from 'angular2/common'
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'passwd-form',
    templateUrl: 'app/passwd-form.component.html'
})
export class PasswdFormComponent {

form:ControlGroup;


constructor(fb : FormBuilder){
  this.form=fb.group({
    oldPassword:['',Validators.compose([
                  Validators.required
                ])],
    newPassword:['',Validators.required],
    confirmPassword:['',Validators.required]
  })
}
// form = new ControlGroup({
//   username: new Control('',Validators.required),
//   password: new Control('',Validators.required)
// });

signup(){
  // var result = authService.login(this.form.value);
  this.form.find('oldPassword').setErrors({
    invalidLogin :true
  });

  console.log(this.form.value);
}


}
