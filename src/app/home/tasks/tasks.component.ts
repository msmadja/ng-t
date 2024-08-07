import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks$!: Observable<Task[]>;
  
  constructor(public readonly tasksService: TasksService) {}

  async ngOnInit(): Promise<void> {
    this.tasks$ = this.tasksService.tasks$();
  }

}
