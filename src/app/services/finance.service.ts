import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JournalEntry } from '../shared/models/journal-entry';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getJournalEntries(): Observable<JournalEntry[]> {
    return this.httpClient.get<JournalEntry[]>('assets/mock/journal-entry.json'); 
  }
}
