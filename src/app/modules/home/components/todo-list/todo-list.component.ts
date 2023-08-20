import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = []

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

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

  public validationInput (event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia. Deseja deletar?')

      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }
}
