import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Array<TaskList> = []

  public deleteItemTaskList (index: number) {
    this.taskList.splice(index, 1)
  }

  public deleteAllTaskList () {
    const confirm = window.confirm('Você realmente deseja deletar todos os itens?')

    if (confirm) {
      this.taskList = []
    }
  }

  public setEmitTaskList (event: string) {
    this.taskList.push({ task: event, checked: false })
  }
}
