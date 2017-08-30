import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: Http) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(): Promise<void | Question[]> {
    return this.http.get(this.questionsUrl)
              .toPromise()
              .then(response => response.json() as Question[])
              .catch(this.handleError);
  }

  getQuestion(id): Promise<void | Question> {
    const url = urljoin(this.questionsUrl, id);
    return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Question)
            .catch(this.handleError);
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }
}
