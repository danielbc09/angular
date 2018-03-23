import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'reverse',
})
export class ReversePipe implements PipeTransform {
    
    transform(value: any) {
        if(value.lenght === 0) {
               return value; 
        }
        return value.split("").reverse().join(""); 
        
    }
}