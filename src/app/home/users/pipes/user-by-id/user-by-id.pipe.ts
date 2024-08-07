import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Pipe({
  name: 'userById'
})
export class UserByIdPipe implements PipeTransform {
  constructor(private userService: UsersService) {}

  transform(userId: number | undefined): Observable<string> {
    if (!userId) {
      return of('Unknown User');
    }
    
    return this.userService.getUser(userId).pipe(
      map(user => user ? user.firstName + " " + user.lastName : 'Unknown User'),
      catchError(() => of('Error fetching user'))
    );
  }
}