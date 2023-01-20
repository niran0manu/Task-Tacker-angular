import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  delete = faTimes;
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);

  }
}


