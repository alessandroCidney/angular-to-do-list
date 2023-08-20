import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  public submitItemTaskList () {
    if (this.addItemTaskList.trim()) {
      this.emitItemTaskList.emit(this.addItemTaskList.trim())
      this.addItemTaskList = ''
    }
  }
}
