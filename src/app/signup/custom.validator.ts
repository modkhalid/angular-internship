import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'path';
import { reject } from 'q';

export class UsernameValidator{
    static whiteSpace(control:AbstractControl):ValidationErrors{
        // <string>control.value
        if((control.value as string).indexOf(' ')>0)
            // return [InvalidWhiteSpace:true];
            return {InvalidWhiteSpace:true}
        return null
    }
    static ShouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if((control.value as string).startsWith("modkhalid"))
                    resolve({Unique:true})
                else
                    reject(null);
            },2000)
        });
    }
}