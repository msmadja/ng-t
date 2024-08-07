import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.services';
import { TaskCardComponent } from './home/tasks/components/tasks-card/task-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserByIdPipe } from './home/users/pipes/user-by-id/user-by-id.pipe';
import { StatusComponent } from './home/shared/components/status/status.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifyUserDialogComponent } from './home/users/components/modify-user/modify-user-dialog.component';
import { DateFormatPipe } from './home/shared/pipes/date-format.pipe';

/**
 * Here there are some component that can be separated to specific modules:
 * All users components and pipe should be set in User module.
 * All tasks  component should be set in Task module.
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    UsersComponent,
    TaskCardComponent,
    UserByIdPipe,
    StatusComponent,
    ModifyUserDialogComponent,
    /**
     * Can be separated to shared module
     */
    StatusComponent,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    /**
     * Can be separated to shared module
     */
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    /**
     * till here
     */
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
