import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidation{
   static containsSpace(control:AbstractControl): ValidationErrors | null {
    if((control.value as String).indexOf(' ') >= 0){
        return {
            containsSpace: true
        }
    }
    return null;
    }

    static containsNumber(control:AbstractControl): ValidationErrors | null{
        if(!(/\d/.test(control.value))){
            return { 
                containsNumber: true
            }
        }
        return null;
    }
    static containsUppercase(control:AbstractControl): ValidationErrors | null{
        if(!(/[A-Z]/.test(control.value))){
            return { 
                containsUppercase: true
            }
        }
        return null;
    }
    static containsLowercase(control:AbstractControl): ValidationErrors | null{
        if(!(/[a-z]/.test(control.value))){
            return { 
                containsLowercase: true
            }
        }
        return null;
    }
    static containsAllowedSpecialChars(control:AbstractControl): ValidationErrors | null{
        if(!(/[_,-,+,@]/.test(control.value))){
            return { 
                containsAllowedSpecialChars: true
            }
        }
        return null;
    }
}