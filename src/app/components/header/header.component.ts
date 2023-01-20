import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title = ' Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uisrevice :UiService ) {
    this.subscription = this.uisrevice.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uisrevice.toggleAddTask();

  }
}
