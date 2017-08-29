import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent {
  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description
    );
    console.log(q);
  }
}
