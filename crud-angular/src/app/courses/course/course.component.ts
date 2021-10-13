import { Component, OnInit } from '@angular/core';

import { Course } from './../model/course';
import { CourseService } from './../../courses/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  displayedColumns = ['name', 'category'];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.courses = this.service.list();
  }
}