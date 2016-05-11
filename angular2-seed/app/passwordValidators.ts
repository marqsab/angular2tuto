import {ControlGroup} from 'angular2/common';

export class PasswordValidators{

    static shouldMatch(group: ControlGroup){
      var newPassword = group.find(newPassword);
      var confirmPassword = group.find(confirmPassword);
      if(newPassword != confirmPassword){
          return {shouldMatch : true};
      }
      return null;
    }



}
