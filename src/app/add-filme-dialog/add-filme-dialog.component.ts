import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-filme-dialog',
  templateUrl: './add-filme-dialog.component.html',
  styleUrls: ['./add-filme-dialog.component.scss']
})
export class AddFilmeDialogComponent {
  filmeForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddFilmeDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = data && data.filme ? true : false;
    const filme = data && data.filme ? data.filme : { id: null, titulo: '', genero: '', duracao: '' };
    this.filmeForm = this.fb.group({
      id: [filme.id],
      titulo: [filme.titulo, Validators.required],
      genero: [filme.genero, Validators.required],
      duracao: [filme.duracao, Validators.required]
    });
  }
  

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.filmeForm.valid) {
      this.dialogRef.close(this.filmeForm.value);
    }
  }
}
