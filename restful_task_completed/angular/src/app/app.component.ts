import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  activeTasks = [];
  activeTask = null;
  newTask = null;
  editTask = null;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = { title: "", description: ""}
  }

  showAllTasksWithClick() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data:any) => {
      this.activeTasks = data.tasks;
      console.log(this.activeTasks)
    });
  }

  showSelectedTaskWithClick(selectedTask) {
    this.activeTask = selectedTask;
    console.log(this.activeTasks)
  }

  createTaskWithForm() {
    this._httpService.createTask(this.newTask)
      .subscribe((data: any) => {
        // this.activeTasks.push(data.newTask);
        console.log("Successfully added new task!", data);
        this.newTask = { 
          title: "", 
          description: "",
          completed: false,
      }
    })
  }

  editTaskWithClick(task) {
    this.editTask = { 
      _id: task._id,
      title: task.title, 
      description: task.description,
      completed: false,
    }
  }

  editTaskWithForm() {
    let observable = this._httpService.editTask(this.editTask._id, this.editTask);
    observable.subscribe(data => this.editTask = null)
  }

  deleteTaskWithClick(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Successfully deleted!", data);
    })
  }
}
