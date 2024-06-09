import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  providers: [NumberService]
})
export class Comp2Component {
  list1:number[]=[];
  constructor(private _numberService: NumberService) {
    this.list1 = this._numberService.getNumber();
  }
  addNumber(num: any) {
    this._numberService.addNumber(num);
    this.list1 = this._numberService.getNumber();
  }
  getNumber() {
    return this._numberService.getNumber();
  }
}
