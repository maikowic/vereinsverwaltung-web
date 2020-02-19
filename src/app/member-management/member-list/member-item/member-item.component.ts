import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() removed = new EventEmitter<Member>();
  @Output() edited = new EventEmitter<Member>();

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
      if (member) {
        this.vereinService.updateMember(member).subscribe(response => {
          this.edited.emit(member);
        })
      }
    })
  }

  removeMember() {
    this.vereinService.removeMember(this.member).subscribe(response => {
      this.removed.emit(this.member)
    })
  }

}
