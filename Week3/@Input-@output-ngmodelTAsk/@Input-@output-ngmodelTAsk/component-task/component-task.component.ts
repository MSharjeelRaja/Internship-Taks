import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-component-task',
  standalone: true,
  imports: [ MatSlideToggleModule],
  templateUrl: './component-task.component.html',
  styleUrl: './component-task.component.scss'
})
export class ComponentTaskComponent {

@Input() para!: string;
@Input() head!: string;
@Input()compcount!: any;

  @Output() messageEvent = new EventEmitter<any>();

  sendMessage() {
    this.messageEvent.emit('Button From Component '+this.compcount+' is clicked');
  }


}
