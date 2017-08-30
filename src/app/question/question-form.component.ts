import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';
import { QuestionService } from './question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styles: [`
    i {
      font-size: 48px;
    }

    small {
      display: block;
    }
  `],
  providers: [QuestionService]
})
export class QuestionFormComponent {
  icons: Object[] = icons;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  getIconVersion(icon: any) {
    let version;
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }
    return version;
  }

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    );
    this.questionService.addQuestion(q)
      .subscribe(
        ({ _id }) => this.router.navigate(['/questions', _id]),
        error => console.log(error)
      );
    form.resetForm();
  }
}
