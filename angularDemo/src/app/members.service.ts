import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members = [
    { name: 'Narendra Modi', party: 'bjp' },
    { name: 'Amit Shah', party: 'bjp' },
    { name: 'Rahul Gandhi', party: 'congress' },
    { name: 'Yedirippu', party: 'bjp' },
    { name: 'Priyanka Vadra', party: 'congress' },
    { name: 'Manmohan singh', party: 'congress' }
  ];

  constructor() { }

  getMembers(party) {
    if (party==='all')
      return this.members.slice();
    return this.members.filter(m => { return m.party === party; });
  }

  updateParty(memberInfo) {
    const pos = this.members.findIndex(m => { return m.name === memberInfo.name; });
    this.members[pos].party = memberInfo.party;
  }

  addMember(memberInfo) {
    const pos = this.members.findIndex(m => { return m.name === memberInfo.name; });
    if (pos !== -1)
      return;
    this.members.push(memberInfo);
  }

}
