import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 40px auto;
      margin-top: 20px;
    }
  `]
})
export class AnswerFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value.description);
  }
}
