import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-user-dialog',
  templateUrl: './modify-user-dialog.component.html',
  styleUrls: ['./modify-user-dialog.component.scss']
})
export class ModifyUserDialogComponent {
  updateForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModifyUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group({
      email: [data?.email || ''],
      firstName: [data?.firstName || ''],
      lastName: [data?.lastName || '']
    });
  }

  onSave(): void {
    if (this.updateForm.valid) {
      this.dialogRef.close(this.updateForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}