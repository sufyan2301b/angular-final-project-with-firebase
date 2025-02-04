import { FirestoreService } from './../services/firestore.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  tasks: any[] = [];
  task: any = {title: ""};
  isEdit: boolean = false;
  taskid: string = "";

  constructor(private firestoreService: FirestoreService)
  {

  }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks()
  {
    this.firestoreService.getTasks().subscribe(data => {
      this.tasks = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()as any,
        }
      })
    });
  }

  addorUpdate()
  {
    if(this.isEdit)
    {
      this.firestoreService.updateTask(this.taskid,this.task).then(()=>
        {
          this.resetForm();
        })
    }
  }

  editTask(task:any)
  {
    this.task = {...task};
    this.isEdit = true;
    this.taskid = task.id;
  }

  resetForm()
  {
    this.task = {title: ""};
    this.isEdit = false;
    this.taskid = this.taskid;
  }

}
