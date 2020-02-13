import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {

  @Input() public member: Member;

  constructor() { }

  ngOnInit() {
  }

}
