import { Component, EventEmitter, OnInit,Output} from '@angular/core';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor( private uiservice : UiService  ) {
   this.subscription = this.uiservice.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    // Clear form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  toggleAddTask() {
    this.uiservice.toggleAddTask();

  }


}
