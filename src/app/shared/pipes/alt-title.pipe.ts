import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altTitle'
})
export class AltTitlePipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    if (!value)  {
      return null;
    }

    let result: string = '';
    value.forEach((val: string) => {
      result = result + ' ' + val;
    });

    return result;
  }

}
