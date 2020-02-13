import { Component, OnInit } from '@angular/core';
import { VereinService } from '../services/verein.service';
import { Member } from '../shared/models/member';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  public memberList: Member[]

  constructor(
    private vereinService: VereinService
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.vereinService.getMembers().subscribe(members => {
      this.memberList = members;
    })
  }

}
