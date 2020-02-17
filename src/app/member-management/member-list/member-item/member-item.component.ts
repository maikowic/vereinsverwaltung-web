import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member';
import { MatDialog } from '@angular/material';
import { MemberFormComponent, Purpose } from '../../member-form/member-form.component';
import { VereinService } from 'src/app/services/verein.service';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {

  @Input() public member: Member;

  constructor(
    private dialog: MatDialog,
    private vereinService: VereinService,
  ) { }

  ngOnInit() {
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(MemberFormComponent, {
      data: {
        purpose: Purpose.EDIT,
        member: this.member
      }
    })

    dialogRef.afterClosed().subscribe(member => {
      console.log(member)

      if (member) {
        this.vereinService.updateMember(member)
      }
    })
  }

  removeMember() {
    this.vereinService.removeMember(this.member)
  }

}
