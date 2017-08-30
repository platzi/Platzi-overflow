import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionFormComponent } from './question-form.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];
