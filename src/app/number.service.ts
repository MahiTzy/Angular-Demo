
// @Injectable({
//   providedIn: 'root'
// })
export class NumberService {
  list:number[]= [100];

  constructor() { }
  addNumber(num:number){
    this.list.push(num);
  }
  getNumber(){
    return this.list;
  }
}
