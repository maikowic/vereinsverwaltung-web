import { Component, OnInit } from '@angular/core';
import { VereinService } from '../services/verein.service';
import { Member } from '../shared/models/member';
import { MatDialog } from '@angular/material';
import { MemberFormComponent, Purpose } from './member-form/member-form.component';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public memberList: Member[]

  constructor(
    private vereinService: VereinService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.vereinService.getMembers().subscribe(members => {
      this.memberList = members;
    })
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(MemberFormComponent, {
      data: {
        purpose: Purpose.CREATE,
        member: ""
      }
    })

    dialogRef.afterClosed().subscribe(member => {
      console.log(member)
      if (member) {
        this.vereinService.createMember(member)
      }
    })
  }

}
