import { Component, OnInit } from '@angular/core';
import { Course } from './../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [
    {_id: '1', name: 'Programação Java', category: 'backend'},
    {_id: '2', name: 'SQL', category: 'banco-dados'},
    {_id: '3', name: 'TCP/IP', category: 'redes'}
  ];

  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }
}