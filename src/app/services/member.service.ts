import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';
import { Member } from '../shared/models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private httpClient: HttpClient,
    private mockMemberService: MockMemberService
  ) { }

  getMembers(): Observable<Member> {
    return this.mockMemberService.getMembers()
  }

  createMember(): void {
    this.mockMemberService.createMember()
  }
  
}

class MockMemberService {

  constructor(
    private logger: LoggerService
  ) { }
  
  getMembers(): Observable<Member> {
    this.logger.warn("using Mock Service")
    return of({
      id: "test",
      first_name: "Maik",
      last_name: "Maurer",
      birthday: new Date(),
      iban: "DE55-00110-0147-891007-441198",
      email: "mkmaurer@mail.com",
      phone: "1337",
      fee: 13.37,
      last_paid: new Date()
    })
  }

  createMember(): void {
    this.logger.warn("create user not implemented")
  }

}