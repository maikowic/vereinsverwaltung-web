import { Component, OnInit, Input } from '@angular/core';
import { JournalEntry } from 'src/app/shared/models/journal-entry';

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {

  @Input() journalEntries: JournalEntry[]

  constructor() { }

  ngOnInit() {
  }

}
