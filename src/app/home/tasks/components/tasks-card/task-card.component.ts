import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/tasks';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task!: Task;
 
  ngOnInit(): void {}

}
