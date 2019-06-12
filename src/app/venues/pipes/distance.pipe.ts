import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getDistance',
    pure: true
  })
  export class GetDistancePipe implements PipeTransform {
    transform(value: number, args?: any): any {
      return this.getDistance(value);
    }

    getDistance(metres: number): string
    {
        var time = this.getTime(metres);
        // under 1km
        if(metres < 1000){
            return Math.round(metres).toString() + "m   |   " + time;
        }
        else
        {
            return (Math.round(metres) / 1000).toFixed(2).toString() + "km   |   " + time;
        }
    }

    getTime(metres: number): string{
      var timeInHours = metres / 5000;
      return Math.round(timeInHours * 60).toString() + " minutes walk approx.";
    }
  }