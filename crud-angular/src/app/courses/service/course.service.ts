import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, delay, first } from 'rxjs/operators/';

import { environment } from 'src/environments/environment';
import { Course } from './../model/course';

@Injectable()
export class CourseService {
  private readonly api = environment.apiURL;
  courses: Course[] = [];

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.api)
      .pipe(
        first(),
        delay(5000),
        tap(courses => console.log(courses)));
  }
}