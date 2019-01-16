import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, limit:number=50): any {
        if(!value)
            return null;
        return (value as string).substring(0,limit)+" ...";
    }
}