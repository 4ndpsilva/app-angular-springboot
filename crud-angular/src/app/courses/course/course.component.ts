import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from './../model/course';
import { CourseService } from './../../courses/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Observable<Course[]> = new Observable();

  displayedColumns = ['name', 'category'];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.courses = this.service.list();
  }
}