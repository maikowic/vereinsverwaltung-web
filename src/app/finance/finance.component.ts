import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';
import { JournalEntry, EntryType } from '../shared/models/journal-entry';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  journalEntries: JournalEntry[];
  amount: number;

  constructor(
    private financeService: FinanceService
  ) { }

  ngOnInit() {
    this.financeService.getJournalEntries().subscribe(response => {
      this.journalEntries = response;
      this.calculateAmount();
    });
  }

  calculateAmount() {
    let sum = 0;
    this.journalEntries.forEach(journalEntry => {
      if (journalEntry.entrytype != EntryType.CREDIT) {
        sum -= journalEntry.amount;
      } else {
        sum += journalEntry.amount;
      }
    });
    this.amount = sum;
  }

}
