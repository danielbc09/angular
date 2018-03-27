import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    
    transform(value: any, sortString: string):any {
        return value.sort((a, b) => {
            if(a[sortString] > b[sortString]){
                return 1;
            }else{
                return -1;
            }
        });

    }
}