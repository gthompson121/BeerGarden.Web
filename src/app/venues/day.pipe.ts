import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getDayName',
    pure: true
  })
  export class GetDayNamePipe implements PipeTransform {
    transform(value: number, args?: any): any {
      return this.getDayName(value);
    }

    getDayName(day: number): string
    {
        switch(day)
        {
            case 0:{return "Monday"}
            case 1:{return "Tuesday"}
            case 2:{return "Wednesday"}
            case 3:{return "Thursday"}
            case 4:{return "Friday"}
            case 5:{return "Saturday"}
            case 6:{return "Sunday"}
            default: {return ""};
        }
    }
  }