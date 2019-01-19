import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator{
    static whiteSpace(control:AbstractControl):ValidationErrors{
        // <string>control.value
        if((control.value as string).indexOf(' ')>0)
            // return [InvalidWhiteSpace:true];
            return [{InvalidWhiteSpace:true}]
        return null
    }
}