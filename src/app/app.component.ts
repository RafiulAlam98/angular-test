import { Component } from '@angular/core';
import { COURSES } from './interfaces/courses.interface';
import { Courses } from './core/course.db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  courses: COURSES[] = Courses;
}
