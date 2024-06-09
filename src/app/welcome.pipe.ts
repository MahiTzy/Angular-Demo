import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  standalone: true
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // debugger;
    return 'Welcome ' + value + ' to Angular 8';
  }

}
