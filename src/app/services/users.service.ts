import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  prefix(): string {
    return 'api/users/';
  }
  private refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  public users$(): Observable<User[]> {
    return this.refresh$.pipe(
        switchMap(() => this.http.get<User[]>(`${this.prefix()}`).pipe(
            catchError(_ => of([] as User[]))
        )));
  }

    refresh(): void { 
      this.refresh$.next();
  }

   public getUser(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.prefix()}${id}`).pipe(
      catchError(_ => of(null))
    );
  }

  public createUser(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.prefix()}`, user).pipe(
      catchError(_ => of(null))
    );
  }

  public updateUser(user: User): Observable<User | null> {
    return this.http.put<User>(`${this.prefix()}${user?.id}`, user).pipe(
      tap((d) => console.log(d)),
      catchError(_ => { console.log(_); return of(null);})
    );
  }
}

