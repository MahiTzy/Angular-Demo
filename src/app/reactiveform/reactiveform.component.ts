import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css',
})
export class ReactiveformComponent {
  regForm!: any;
  // constructor() { }
  // ngOnInit() {
  //   this.regForm = new FormGroup({
  //     name: new FormControl(),
  //     email: new FormControl(),
  //     password: new FormControl()
  //   });
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.regForm = this._fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
      ],
      // email: ['', [Validators.required, Validators.email]],
      email: new FormArray([new FormControl()]),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // this.regForm.controls['name'].valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    // this.regForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    // this.regForm.statusChanges.subscribe((data) => {
    //   console.log(data);
    // });
    // let data = new FormArray([new FormControl('Hello'), new FormControl('Hello')]);
    // console.log(data.value);
    // data.reset();
    // console.log(data.value);
  }
  removeEmail(i: any) {
    let email = this.regForm.get('email') as FormArray;
    email.removeAt(i);
  }
  addEmail() {
    let email = this.regForm.get('email') as FormArray;
    email.push(new FormControl());
  }
  register() {
    console.log(this.regForm.value);
    console.log(this.regForm.controls['name'].value);
    console.log(this.regForm.get('name')?.value);
  }
  reset() {
    // this.regForm.reset();
    this.regForm.reset({
      name: 'Mohit',
      email: '',
      password: '',
    });
  }
  setValue() {
    this.regForm.setValue({
      name: 'Mohit',
      email: 'ms@gmail.com',
      password: 'mohit123',
    });
  }
  patchValue() {
    this.regForm.patchValue({
      name: 'Mohit',
    });
  }
}
