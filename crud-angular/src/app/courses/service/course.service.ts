import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Course } from './../model/course';

@Injectable()
export class CourseService {
  api = environment.apiURL;
  courses: Course[] = [];

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.api);
  }
}