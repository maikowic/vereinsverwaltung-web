import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../shared/models/member';

@Injectable({
  providedIn: 'root'
})
export class VereinService {

  private url = "http://10.47.225.237:8080/members";

  constructor(
    private httpClient: HttpClient
  ) { }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>('assets/mock/member.json'); 
    // return this.httpClient.get<Member[]>(this.url);
  }

  createMember(member: Member): Observable<Member> {
    console.log("CREATE: " + member.firstname)
    return this.httpClient.post<Member>(this.url /* CREATE */, member);
  }

  updateMember(member: Member): Observable<Member> {
    console.log("UPDATE: " + member.id)
    return this.httpClient.post<Member>(this.url /* UPDATE */, member);
  }

  removeMember(member: Member): Observable<Member> {
    console.log("REMOVE: " + member.id)
    return this.httpClient.post<Member>(this.url /* REMOVE */, member);
  }

}