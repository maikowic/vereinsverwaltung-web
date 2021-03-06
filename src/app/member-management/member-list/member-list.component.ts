import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  
  @Input() memberList: Member[];

  constructor() { }

  ngOnInit() {

  }

  onEdited(member: Member) {
    let index = this.memberList.findIndex(element => element.id === member.id);
    this.memberList[index] = member;
  }

  onRemoved(member: Member) {
    this.memberList = this.memberList.filter(element => element != member)
  }

}
