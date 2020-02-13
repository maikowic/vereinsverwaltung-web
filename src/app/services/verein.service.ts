import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Member } from '../shared/models/member';

@Injectable({
  providedIn: 'root'
})
export class VereinService {

  url = "http://10.47.225.237:8080/members";

  constructor(
    private httpClient: HttpClient
  ) { }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>('assets/mock/member.json'); 
    // return this.httpClient.get<Member[]>(this.url);
  }

  createMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(this.url, member);
  }

}