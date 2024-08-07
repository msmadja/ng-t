import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../model/user';
import { Task } from '../model/tasks';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  
  createDb() {
    const addDaysToNow = (days: number) => {
      const d = new Date();
      d.setDate(d.getDate() + days);
      return d;
    };

    return {
      users: [
        {
          id: 1,
          firstName: 'Manager',
          lastName: 'Cyberbit',
          email: 'mail1@mail.com',
          role: 'Manager'          
        },
        {
          id: 2,
          firstName: 'Employee1',
          lastName: 'Cyberbit',
          email: 'mail2@mail.com',
          role: 'Employee'          
        },{
          id: 3,
          firstName: 'Employee2',
          lastName: 'Cyberbit',
          email: 'mail3@mail.com',
          role: 'Employee'          
        }
      ] as User[],
      tasks: [
        {
          id: 1,
          userId: 2,
          title: "Task 1",
          description: "This is the description of task 1",
          status: "Open",
          createdByUserId: 1,
          creationTime: addDaysToNow(-5),
          dueDate: addDaysToNow(5)
        },
        {
          id: 2,
          userId: 2,
          title: "Task 2",
          description: "This is the description of task 2",
          status: "Open",
          createdByUserId: 1,
          creationTime: addDaysToNow(-7),
          dueDate: addDaysToNow(-2)
        },
        {
          id: 3,
          userId: 2,
          title: "Task 3",
          description: "This is the description of task 3",
          status: "Done",
          createdByUserId: 1,
          creationTime: addDaysToNow(-30),
          dueDate: addDaysToNow(-20)
        },
        {
          id: 4,
          userId: 3,
          title: "Task 1",
          description: "This is the description of task 1",
          status: "Open",
          createdByUserId: 1,
          creationTime: addDaysToNow(0),
          dueDate: addDaysToNow(5)
        }
      ] as Task[]
    };
  }
}