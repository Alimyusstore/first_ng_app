import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'to-dos',
  imports: [FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
  task: string = '';
  taskList: { id: number; name: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, name: this.task });
    this.task = ""
  };
  handleDelete(id:number){
    this.taskList= this.taskList.filter((item)=> item.id !== id)
  };
}
