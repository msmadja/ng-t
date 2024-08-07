import { Component, Input } from '@angular/core';
import { TaskStatus } from 'src/app/model/enums/task-status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() status!: TaskStatus;
}
