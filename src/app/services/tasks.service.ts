import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, scan, switchMap } from 'rxjs';
import {  Task } from '../model/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  prefix(): string {
    return 'api/tasks/';
  }
  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  public tasks$(): Observable<Task[]> {
    return this.refresh$.pipe(
        switchMap(() => this.http.get<Task[]>(`${this.prefix()}`).pipe(
            catchError(_ => of([] as Task[]))
        )));
  }

   refresh(): void { 
        this.refresh$.next();
   }

   public getTask(id: number): Observable<Task | null> {
    return this.http.get<Task>(`${this.prefix()}${id}`).pipe(
      catchError(_ => of(null))
    );
  }
}

