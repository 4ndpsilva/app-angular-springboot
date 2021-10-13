import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';

@Injectable()
export class CourseService {
  courses: Course[] = [];

  constructor(private httpClient: HttpClient) { }

  list(): Course[]{
    return [
      {_id: '1', name: 'Programação Java', category: 'backend'},
      {_id: '2', name: 'SQL', category: 'banco-dados'},
      {_id: '3', name: 'TCP/IP', category: 'redes'}
    ];
  }
}