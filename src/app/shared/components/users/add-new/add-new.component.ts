import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRandomUserResult} from "../../../models/random-user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'echo-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  @Output() addNewUser: EventEmitter<IRandomUserResult> = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.form = this.formBuilder.group({
      cell: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      dob: [null, [Validators.required]],

      first: [null, [Validators.required]],
      last: [null, [Validators.required]],
      // title: [null, [Validators.required]],

      email: [null, [Validators.email, Validators.required]],
      username: [null, [Validators.required]],

      state: [null, [Validators.minLength(3)]],
      address: [null, [Validators.minLength(3)]],
      city: [null, [Validators.minLength(2)]],
      zip: [null, [Validators.minLength(2)]],

      gender: [null]
    });
  }

  onSubmit() {


    const newUser: IRandomUserResult = {
      registered: {
        date: new Date().toDateString(),
        age: 0
      },
      dob: {
        date: new Date(this.form.controls['dob'].value).toDateString(),
        age: 0
      },
      cell: this.form.controls['cell'].value,
      phone: this.form.controls['phone'].value,
      name: {
        first: this.form.controls['first'].value,
        last: this.form.controls['last'].value
      },
      email: this.form.controls['email'].value,
      gender: this.form.controls['gender'].value,
      location: {
        postcode: this.form.controls['zip'].value,
        city: this.form.controls['city'].value,
        street: this.form.controls['address'].value,
        state: this.form.controls['state'].value,
      },
      login: {
        username: this.form.controls['username'].value,
      },
      picture: {
        medium: '',
        large: '',
        thumbnail: ''
      }
    };
    this.addNewUser.emit(newUser);
    this.initForm();
  }

}
