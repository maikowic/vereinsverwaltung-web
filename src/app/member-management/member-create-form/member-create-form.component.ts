import { Component, OnInit } from '@angular/core';
import { VereinService } from 'src/app/services/verein.service';

@Component({
  selector: 'app-member-create-form',
  templateUrl: './member-create-form.component.html',
  styleUrls: ['./member-create-form.component.scss']
})
export class MemberCreateFormComponent implements OnInit {

  constructor(
    private vereinService: VereinService
  ) { }

  ngOnInit() {
  }

}
