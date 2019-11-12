import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
  }

  getTasks() {
    return this._http.get('/api/tasks');
  }

  createTask(newTask) {
    return this._http.post('/api/task', newTask);
  }

  deleteTask(id) {
    return this._http.delete('/api/tasks/' + id);
  }

  editTask(id, editTask) {
    return this._http.put('/api/tasks/' + id, editTask);
  }
}

