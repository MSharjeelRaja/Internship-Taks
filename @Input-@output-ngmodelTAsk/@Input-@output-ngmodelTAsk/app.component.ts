import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ComponentTaskComponent } from './component-task/component-task.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from "./parent/parent.component";
import { MainComponent } from "./20May-AngularMaterial/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent, FormsModule, ComponentTaskComponent, ParentComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
