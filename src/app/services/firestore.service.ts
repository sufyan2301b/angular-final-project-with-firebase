import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private collectionName = "tasks";
  constructor(private firestore: AngularFirestore) { }

  //Insert Data to firebase
  addTask(task: any)
  {
    return this.firestore.collection(this.collectionName).add(task);
  }

  //Get Data from Firestore
  getTasks() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  //Update Data From Firestore
  updateTask(taskId: string, task: any) {
    return this.firestore.collection(this.collectionName).doc(taskId).update(task);
  }

  //delete data on firestore
  deleteTask(taskId: string) {
    return this.firestore.collection(this.collectionName).doc(taskId).delete();
  }
}
