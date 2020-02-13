import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member';
import { timer } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'surname', ];

  @Input() memberList: Member[];

  constructor() { }

  ngOnInit() {
  }

}
