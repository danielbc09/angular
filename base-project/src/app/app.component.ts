import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { Observable } from 'rxjs/Observable';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  singupForm: FormGroup;

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'projectName': new FormControl('Project', [Validators.required, 
        CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidPRojectName),
      'email': new FormControl('test@email.com', [Validators.required, Validators.email]),
      'projectStatus':  new FormControl('critical'),
    });
  }

  onSubmit() {
    console.log(this.singupForm.value);
  }
}
