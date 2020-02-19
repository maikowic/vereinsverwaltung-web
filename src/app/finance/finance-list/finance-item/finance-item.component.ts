import { Component, OnInit, Input } from '@angular/core';
import { JournalEntry } from 'src/app/shared/models/journal-entry';

@Component({
  selector: 'app-finance-item',
  templateUrl: './finance-item.component.html',
  styleUrls: ['./finance-item.component.scss']
})
export class FinanceItemComponent implements OnInit {

  @Input() journalEntry: JournalEntry;

  constructor() { }

  ngOnInit() {
  }

}
