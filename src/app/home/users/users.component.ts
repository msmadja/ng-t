import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';
import { ModifyUserDialogComponent } from './components/modify-user/modify-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { UserRole } from 'src/app/model/enums/user-roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'role', 'actions'];
  allUsers: User[] = [];
  public users$!: Observable<User[]>;

  constructor(
    public usersService: UsersService,
    private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.users$ = this.usersService.users$();
  }

  openDialog(user?: any): void {
    const dialogRef = this.dialog.open(ModifyUserDialogComponent, {
      width: '400px',
      data: user ? { email: user.email, id: user.id, firstName: user.firstName, lastName: user.lastName } : {}
    });

    dialogRef.afterClosed().subscribe(async modifiedUser => {
      if (modifiedUser) {
        if (user) {
           await firstValueFrom(this.usersService.updateUser({...user, ...modifiedUser}));
        } else {
           await firstValueFrom(this.usersService.createUser({...modifiedUser, role: UserRole.Employee}));
        }
        this.usersService.refresh();
      }
    });
  }

  editUser(user: any): void {
    this.openDialog(user);
  }

  createUser(): void {
    this.openDialog();
  }
}
