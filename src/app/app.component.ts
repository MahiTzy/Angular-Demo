import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { LoginComponent } from './login/login.component';
import { MessageService } from './message.service';
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { TemplateformComponent } from "./templateform/templateform.component";
import { WelcomePipe } from './welcome.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, CommonModule, FormsModule, WelcomePipe, Comp1Component, Comp2Component, RouterLink, RouterLinkActive, TemplateformComponent, ReactiveformComponent]
})
export class AppComponent {
  currentDate = new Date();
  myData= "Mohit";
  _msg: string="";
  constructor(private _msgservice:MessageService) {
    this._msg=_msgservice.getMessage();
    
  }
  // onChange(value: any) {
  //   this.myData = value;
  //   console.log(value);
  // }
  // company={
  //   name: "TCS",
  //   location: "Mumbai"
  // }
  // students = [
  //   {
  //     id:1,
  //     name: "Mohit",
  //     age:12
  //   }
  // ]
  // CData: any;
  // title = 'angulardemo';
  // getName() {
  //   alert('Hello World');
  // }
  // @HostListener('click', ['$event'])
  // show() {
  //   alert('Hello World');
  // }
  //   @HostBinding('style.color')
  //   color = 'blue';
  // getData(value: any) {
  //   this.CData = value;
  //   console.log(value);
  // }
}
