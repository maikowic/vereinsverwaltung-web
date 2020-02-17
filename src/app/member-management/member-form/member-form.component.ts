import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Member } from 'src/app/shared/models/member';
import { FormBuilder, Validators } from '@angular/forms';

export enum Purpose {
  CREATE = "Create",
  EDIT = "Edit"
}

export interface DialogData {
  purpose: Purpose;
  member: Member;
}

@Component({
  selector: 'app-member-create-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  memberForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    iban: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    fee: ['', Validators.required],
  })

  constructor(
    public dialogRef: MatDialogRef<MemberFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (this.data.purpose === Purpose.EDIT) {
      this.memberForm.patchValue({
        firstName: this.data.member.firstname,
        lastName: this.data.member.surname,
        birthday: this.data.member.birthday,
        iban: this.data.member.iban,
        email: this.data.member.email,
        phone: this.data.member.phone,
        fee: this.data.member.fee
      })
    }
  }

  proceedClick(): void {
    if (this.memberForm.valid) {
      let member: Member = {
        id: this.data.member.id,
        lastpaid: this.data.member.lastpaid,
        firstname: this.memberForm.get('firstName').value,
        surname: this.memberForm.get('lastName').value,
        birthday: this.memberForm.get('birthday').value,
        iban: this.memberForm.get('iban').value,
        email: this.memberForm.get('email').value,
        phone: this.memberForm.get('phone').value,
        fee: this.memberForm.get('fee').value
      }
      this.dialogRef.close(member);
    } else {
      this.memberForm.markAllAsTouched()
    }
  }
}
