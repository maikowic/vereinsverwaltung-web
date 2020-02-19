export class JournalEntry {
  id: string;
  name: string;
  description: string;
  date: Date;
  entrytype: EntryType
  amount: number;
}

export enum EntryType {
  TRANSFER = "transfer",
  DIRECT_DEBIT = "debit",
  CREDIT = "credit"
}