import { PipeTransform } from "@angular/core";

export class SortPipe implements PipeTransform {
    
    transform(value: any, sortString: string) {
        if(value.lenght === 0 || sortString){
            return value;
        }
    }
}