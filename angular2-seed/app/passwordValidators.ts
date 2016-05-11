import {Control} from 'angular2/common';

export class PasswordValidators{

    static shouldMatch(control: Control){
      return new Promise((resolve, reject)=>{
        setTimeout(function(){
          if(control.value == "marc"){
            resolve({shouldBeUnique: true});
          }else{
            resolve(null);
          }
        },1000);
      })
    }



}
